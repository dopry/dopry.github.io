---
title: "XMLHttpRequest2 and the future of AJAX..."
pubDate: 2008-07-10T00:00:00
description: I've been working on the ImageField update for D6 today, normally when I'm working on updates I research current developments in the project's domain. A little bit of googling lead me to one of the questions that always seems to pop up in my head... [Why do browsers still not have file upload progress meters?](https://web.archive.org/web/20130908230620/http://michaelkimsal.com/blog/why-do-browsers-still-not-have-file-upload-progress-meters/)
tags:
  - AJAX
  - W3C
  - AHAH
  - XMLHttpRequest2
  - Uploads
---

I've been working on the ImageField update for D6 today, normally when I'm working on updates I research current developments in the project's domain. A little bit of googling lead me to one of the questions that always seems to pop up in my head... [Why do browsers still not have file upload progress meters?](https://web.archive.org/web/20130908230620/http://michaelkimsal.com/blog/why-do-browsers-still-not-have-file-upload-progress-meters/)

I got to seriously thinking about it. From the browser developer's stand point the problem isn't entirely a simple one. It's a question of when and how to display the progress meter. Do you do it on all posts? Only the posts with files? For all files? How do you display asynchronous request progress intiated with XMLHttpRequest? Then you have the web designer who wants it to look just so, and the web developer who wants the workflow to be just so...

In the Web 2.0 world we can pretty much depend on the presence of Javascript and the usage of XMLHttpRequest. So I got to digging around XMLHttpRequest and discovered it has a progress event, unfortunately it only returns response progress... :(

However it seems the pressure on browser developers is pushing the [W3C WebAPI working group](https://web.archive.org/web/20130908230620/http://www.w3.org/2006/webapi/) to consider a solution that is fair for everyone. [XMLHttpRequest2](https://web.archive.org/web/20130908230620/http://www.w3.org/TR/XMLHttpRequest2/#xmlhttprequest) represents the next iteration of the heart of AJAX. So what's new in XMLHttpRequest2? Cross site requests and upload progress tracking. Frankly I think it is an awesome move. I don't exactly like the proposed interface, but I don't entirely grok it yet, since I haven't gotten to work with an actual implementation. I don't really like the following proposed interface....

```
interface XMLHttpRequestEventTarget : EventTarget {
 // event handler attributes
 attribute EventListener onabort;
 attribute EventListener onerror;
 attribute EventListener onload;
 attribute EventListener onloadstart;
 attribute EventListener onprogress;
};

interface XMLHttpRequestUpload : XMLHttpRequestEventTarget { // for future use };

interface XMLHttpRequest : XMLHttpRequestEventTarget {
 // event handler attributes
 attribute EventListener onreadystatechange;
 // ready states
 const unsigned short UNSENT = 0;
 const unsigned short OPENED = 1;
 const unsigned short HEADERS_RECEIVED = 2;
 const unsigned short LOADING = 3;
 const unsigned short DONE = 4;
 readonly attribute unsigned short readyState;
 // request metadata
 void open(in DOMString method, in DOMStringurl);
 void open(in DOMString method, in DOMStringurl, in boolean async);
 void open(in DOMString method, in DOMStringurl, in boolean async, in DOMString user);
 void open(in DOMString method, in DOMStringurl, in boolean async, in DOMString user, inDOMString password);
 void setRequestHeader(in DOMString header, inDOMString value);
 // request
 readonly attribute XMLHttpRequestUpload upload;
 void send();
 void send(in ByteArray data);
 void send(in DOMString data);
 void send(in Document data); void abort();
 // response metadata
 DOMString getAllResponseHeaders();
 DOMString getResponseHeader(in DOMStringheader);
 readonly attribute unsigned short status;
 readonly attribute DOMString statusText;
 // response body
 void overrideMimeType(mime);
 readonly attribute ByteArray responseBody;
 readonly attribute DOMString responseText;
 readonly attribute Document responseXML;
};
```

It seems to replace the response progress tracking inherent in the old XMLHttpRequest.progress in favor combined progress tracking for both the request and response, while adding independent progress tracking for the request as
XMLHttpRequest.upload. The combined behavior should be good enough for backwards compatability but isn't a perfect match to the old XMLHttpRequest.progress I'd much rather see something like:

```
interface XMLHttpEventTarget : EventTarget {
 // event handler attributes
 attribute EventListener onabort; // When the request has been aborted.
 attribute EventListener onerror; // When the request has failed.
 attribute EventListener onload; // When the request has completed.
 attribute EventListener onloadstart; // When the request starts.
 attribute EventListener onprogress; // While loading or sending data.
}

interface XMLHttpRequest : XMLHttpEventTarget {
 // event handler attributes
 attribute EventListener onreadystatechange;
 // ready states
 const unsigned short UNSENT = 0; // object constructed.
 const unsigned short OPENED = 1; // open method has been invoked.
 const unsigned short SENDING = 2; // request is being sent to server.
 const unsigned short DONE = 2; // request has been completed.
 readonly attribute unsigned short readyState;
 void setHeader(in DOMString header, in DOMString value);
 DOMString getAllHeaders();
 DOMString getHeader(in DOMString header);
 readonly attribute unsigned short status;
 readonly attribute DOMString statusText;
 // request metadata
 void open(in DOMString method, in DOMStringurl);
 void open(in DOMString method, in DOMStringurl, in boolean async);
 void open(in DOMString method, in DOMString url, in boolean async, in DOMString user);
 void open(in DOMString method, in DOMStringurl, in boolean async, in DOMString user, in DOMString password);
 // request
 XMLHttpResponse send(); XMLHttpResponse send(in ByteArray data); XMLHttpResponse send(in DOMString data); XMLHttpResponse send(in Document data); void abort();
}

interface XMLHttpResponse : XMLHttpEventTarget {
 // event handler attributes
 attribute EventListener onreadystatechange;
 // ready states
 const unsignes short WAITING = 0; // wait on request to complete.
 const unsigned short HEADERS_RECEIVED = 1; // recieved response headers.
 const unsigned short LOADING = 2; // receiving response body.
 const unsigned short DONE = 3; // responsecompleted.
 // response metadata
 DOMString getAllHeaders();
 DOMString getHeader(in DOMString header);
 readonly attribute unsigned short status;
 readonly attribute DOMString statusText;
 // response body
 void overrideMimeType(mime);
 readonly attribute ByteArray responseBody;
 readonly attribute DOMString responseText;
 readonly attribute Document responseXML;
}
```

Which removes response specific properties from XMLHttpRequest, and adds an XMLHttpResponse object for
handling response data and response related events. I'd love to have semi consistent way of handling both sides of the job and uses terminology more consistent with HTTP. I seriously doubt the W3C or browser implementors will take me seriously any time soon, and I'm probably over abstracting things like I usually do.

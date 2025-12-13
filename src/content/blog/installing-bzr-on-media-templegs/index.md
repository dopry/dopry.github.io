---
title: "Installing `bzr` on Media Temple(GS)"
pubDate: 2008-05-28T00:00:00
description: I've been migrating a few personal development sites to Media Temple's Grid Service. I normally use `bzr` to manage my websites through development and roll out.
images:
  - url: ./mt-gs.jpg
    alt: MediaTemple Logo
tags:
  - bzr
  - media temple
  - grid services
---

I've been migrating a few personal development sites to Media Temple's Grid Service. I normally use `bzr` to manage my websites through development and roll out. Media Temple is nice enough to provide cvs, svn, and git, but no bzr. If you ask about getting bzr from their support team they'll probably try to upsell you to a dv with some perfunctory statement about compiled apps and root access.... Fortunately, `bzr` is a python module that which requires python 2.4 and Media Temple's grid has python 2.4. So the quick and dirty solution to getting my favorite revision control set up on Media Temple...

```bash
#!/bin/bash

wget https://launchpadlibrarian.net/14566578/bzr-1.5.tar.gz

wget http://www.amk.ca/files/python/crypto/pycrypto-2.0.1.tar.gz

wget http://www.lag.net/paramiko/download/paramiko-1.7.2.zip

wget http://effbot.org/media/downloads/elementtree-1.2.6-20050316.tar.gz

wget http://effbot.org/media/downloads/cElementTree-1.0.5-20051216.tar.gz

#install bzr
tar -xvzf bzr-1.5.tar.gz cd bzr-1.5
python setup.py install --home=~
cd ..

#install pycrypto
tar -xvzf pycrypto-2.0.1.tar.gz
cd pycrypto-2.0.1
python setup.py install --home=~
cd ..

#install paramiko
unzip paramiko-1.7.2.zip
cd paramiko-1.7.2
python setup.py install --home=~
cd ..

#install elementtree
tar -xvzf elementtree-1.2.6-20050316.tar.gz
cd elementtree-1.2.6-20050316
python setup.py install --home=~
cd ..

#install celementtree
tar -xvzf cElementTree-1.0.5-20051216.tar.gz
cd cElementTree-1.0.5-20051216
python setup.py install --home=~
cd ..

#fix paths in .profile echo
"export PATH=\$PATH:~/bin" >> ~/.profile
echo "export PYTHONPATH=\$PYTHONPATH:~/lib/python" >> ~/.profile
source ~/.profile
```

Some caveats for using Bzr with Media Temple's Grid Service.

- urlencode the url to the repository
- use absolute paths

  bad:

  ```bash
  bzr branch sftp://user%example.com@example.com/domains/example.com/html mybranch
  ```

  good:

  ```bash
  bzr branch sftp://user%25example.com@example.com/home/12345/users/.home/domains/example.com/html mybranch
  ```

/**
 * The default export of `netlify-cms-app` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import CMS from 'netlify-cms-app'
import { nanoid } from 'nanoid'
import { Component, createElement } from 'react'

/**
 * Any imported styles should be automatically be applied to the editor preview
 * pane thus eliminating the need to use `registerPreviewStyle` for imported
 * styles. However if you are experiencing build errors regarding importing css,
 * sass or scss into a cms module when deploying to the netlify platform, you
 * may need to follow the implementation found in netlify documentation here:
 * https://www.netlifycms.org/docs/beta-features/#raw-css-in-registerpreviewstyle
 * All of the example imports below would result in styles being applied to the
 * preview pane.
 */
//  import "module-that-imports-styles.js"
//  import "styles.scss"
//  import "../other-styles.css"

class IdWidget extends Component {
  getDefaultProps() {
    return { value: '' }
  }
  componentDidMount() {
    if (!this.props.value) {
      this.props.onChange(nanoid())
    }
  }
  render() {
    var value = this.props.value
    var classNameWrapper = this.props.classNameWrapper
    var forID = this.props.forID

    return createElement(
      'span',
      { id: forID, className: classNameWrapper },
      value
    )
  }
}

// custom uuid field to support relationships.
CMS.registerWidget('id', IdWidget)

console.log('REgisterd CMS', { IdWidget })

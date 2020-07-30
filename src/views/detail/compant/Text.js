import React, { Component } from 'react'
import MarkDown from 'react-markdown/with-html'
import CodeBlock from './CodeBlock'
import HeadingBlock from './HeadingBlock'
export default class Text extends Component {
    render() {
        return (
            <div className="ui attached padded segment ">
                <div className="ui right aligned basic segment normal markdown_views">
                    <div className="ui orange basic label">原创</div>
                    
                    
                    {/* <div className="js-toc-content typo typo-selection m-padded-lr-responsive m-padded-tb-large" 
                    dangerouslySetInnerHTML={{__html:this.props.content}}></div> */}
                    <MarkDown 
                    className="result"
                    source={this.props.md}
                    renderers={{
                    code:CodeBlock,
                    heading:HeadingBlock
                    }}
                    
                    >

                    </MarkDown>
                </div>
            </div>
        )
    }
}

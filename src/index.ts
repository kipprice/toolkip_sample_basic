import { Drawable, _Drawable } from '@toolkip/drawable';
import { IStandardStyles } from '@toolkip/style-helpers'

function basicDrawable() {
    let drw = new Drawable({
        type: "div",
        cls: "cls",
        content: "A banner containing informational material",
        parent: document.body
    });

    drw.mergeInStyles({ 
        'body, html': {
            margin: '0',
            padding: '0'
        },
        '.cls': {
            backgroundColor: "#EEE",
            color: "#333",
            width: "100%",
            height: "100%",
            margin: "0",
            padding: "10px",
            fontFamily: "Helvetica",
            textAlign: 'center',
            marginBottom: "10px",
            boxSizing: 'border-box'
        }
});

    const drw2 = new SimpleDrawable();
    drw2.draw(document.body);
}

class SimpleDrawable extends _Drawable {
    protected static _uncoloredStyles: IStandardStyles = {
        ".card": {
            backgroundColor: "#FEFEFA",
            color: "#555",
            borderRadius: "5px",
            boxShadow: "1px 1px 5px 3px rgba(0,0,0,.1)",
            padding: "10px",
            maxWidth: "200px",
            margin: '10px',

            nested: {
                ".header": {
                    fontSize: "1.5rem",
                    paddingBottom: "5px",
                    borderBottom: "1px solid #CCC",
                    marginBottom: "10px",
                    color: '#333'
                }
            }
        }
    }

    protected _createElements() {
        return this._createBase({
            key: 'base',
            cls: 'card',
            children: [
                { content: "This Represents a Header", cls: "header" },
                { content: "This is the appropriate body text for the class version"}
            ]
        });
    }
}

window.addEventListener("load", () => basicDrawable());
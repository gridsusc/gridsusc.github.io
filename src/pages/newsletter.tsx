import React, { useEffect } from 'react';

const NewsletterComponent = () => {
    const divStyle = {
        position: 'relative' as 'relative',
        width: '100%',
        padding: '5px',
        border: '2px solid black',
    }

    const labelStyle = {
        position: 'absolute' as 'absolute',
        left: '10px',
        top: '-10px',
        fontSize: '14px',
        backgroundColor: '#b19cd9',  // this will help to interrupt the border
        padding: '0 5px',
        fontFamily: 'sans-serif',
        fontWeight: 'bold'        
    }

    const inputStyle = {
        width: '80%',
        padding: '5px',
        borderColor: 'transparent',  // make the input border transparent
        borderWidth: '2px',
        fontSize: '16px',
        color: 'black',
        backgroundColor: 'transparent',
        boxSizing: 'border-box' as 'border-box'
    }


    const formStyle = {}
    useEffect(() => {
        const script1 = document.createElement('script');
        const script2 = document.createElement('script');


        script1.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
        script1.type = 'text/javascript';
        script1.async = true;
        document.body.appendChild(script1);

        script1.onload = () => {
            script2.type = 'text/javascript';
            script2.async = true;
            script2.innerHTML = `
        (function($) {
          window.fnames = new Array(); window.ftypes = new Array();
          fnames[0]='EMAIL';ftypes[0]='email';
          fnames[1]='FNAME';ftypes[1]='text';
          fnames[2]='LNAME';ftypes[2]='text';
          fnames[3]='ADDRESS';ftypes[3]='address';
          fnames[4]='PHONE';ftypes[4]='phone';
          fnames[7]='MMERGE7';ftypes[7]='text';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      `;
            document.body.appendChild(script2);
        }

        return () => {
            document.body.removeChild(script1);
            if (script1.onload) {
                document.body.removeChild(script2);
            }
        };
    }, []);

    return (
        <div id="mc_embed_shell">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
            <style type="text/css">
                {`
        #mc_embed_signup{
          background: #fff; 
          clear: left; 
          font: 14px Helvetica, Arial, sans-serif; 
          width: 450px;
        }
      `}
            </style>
            <div id="mc_embed_signup" style={{ backgroundColor: '#b19cd9', padding: '20px', borderRadius: '12px', boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.5)', }}>
                <form action="https://github.us19.list-manage.com/subscribe/post?u=45655a68038817a764288bbe4&amp;id=1019d0c550&amp;f_id=00c395e4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                    <div id="mc_embed_signup_scroll">
                        <h2>Subscribe to Our Newsletter</h2>
                        <h3>Get the latest updates on our events</h3>
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group" style={divStyle}>
                            <label htmlFor="mce-EMAIL" style={labelStyle}>Email Address</label>
                            <input style={inputStyle} type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                            <input type="text" name="b_45655a68038817a764288bbe4_1019d0c550" value="" />
                        </div>
                        <div className="clear">
                            <input
                                type="submit"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button"
                                value="Subscribe"
                                style={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    borderRadius: '5px',
                                    fontWeight: 'bold',
                                    marginTop: '20px'
                                }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsletterComponent;



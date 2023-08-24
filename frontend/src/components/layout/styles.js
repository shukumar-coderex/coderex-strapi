import css from 'styled-jsx/css';
import theme from '../../styles/theme';
export default css.global`

.slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}/*# sourceMappingURL=slick.min.css.map */
@charset 'UTF-8';.slick-dots,.slick-next,.slick-prev{position:absolute;display:block;padding:0}.slick-dots li button:before,.slick-next:before,.slick-prev:before{font-family:slick;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-loading .slick-list{background:url(ajax-loader.gif) center center no-repeat #fff}@font-face{font-family:slick;font-weight:400;font-style:normal;src:url(fonts/slick.eot);src:url(fonts/slick.eot?#iefix) format('embedded-opentype'),url(fonts/slick.woff) format('woff'),url(fonts/slick.ttf) format('truetype'),url(fonts/slick.svg#slick) format('svg')}.slick-next,.slick-prev{font-size:0;line-height:0;top:50%;width:20px;height:20px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);cursor:pointer;color:transparent;border:none;outline:0;background:0 0}.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-size:20px;line-height:1;opacity:.75;color:#fff}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:'â†'}.slick-next:before,[dir=rtl] .slick-prev:before{content:'â†’'}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}[dir=rtl] .slick-next:before{content:'â†'}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;width:100%;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'â€¢';text-align:center;opacity:.25;color:#000}.slick-dots li.slick-active button:before{opacity:.75;color:#000}/*# sourceMappingURL=slick-theme.min.css.map */
.notification-container-bottom-center,.notification-container-bottom-left,.notification-container-bottom-right,.notification-container-mobile-bottom,.notification-container-mobile-top,.notification-container-top-center,.notification-container-top-left,.notification-container-top-right{position:fixed;z-index:8000}.notification-container-top-center{transform:translateX(-50%);top:20px;left:50%}.notification-container-bottom-center{transform:translateX(-50%);bottom:20px;left:50%}.notification-container-top-left{left:20px;top:20px}.notification-container-top-right{right:20px;top:20px}.notification-container-bottom-left{left:20px;bottom:20px}.notification-container-bottom-right{bottom:20px;right:20px}.notification-container-mobile-top{right:20px;left:20px;top:20px}.notification-container-mobile-bottom{right:20px;left:20px;bottom:20px;margin-bottom:-15px}.notification-default{border-left:8px solid #0562c7}.notification-default,.notification-default .timer{background-color:#007bff}.notification-default .timer-filler{background-color:#fff}.notification-default .notification-close{background-color:#007bff}.notification-success{border-left:8px solid #1f8838}.notification-success,.notification-success .timer{background-color:#28a745}.notification-success .timer-filler{background-color:#fff}.notification-success .notification-close{background-color:#28a745}.notification-danger{border-left:8px solid #bd1120}.notification-danger,.notification-danger .timer{background-color:#dc3545}.notification-danger .timer-filler{background-color:#fff}.notification-danger .notification-close{background-color:#dc3545}.notification-info{border-left:8px solid #138b9e}.notification-info,.notification-info .timer{background-color:#17a2b8}.notification-info .timer-filler{background-color:#fff}.notification-info .notification-close{background-color:#17a2b8}.notification-warning{border-left:8px solid #ce9c09}.notification-warning,.notification-warning .timer{background-color:#eab000}.notification-warning .timer-filler{background-color:#fff}.notification-warning .notification-close{background-color:#eab000}.notification-awesome{border-left:8px solid #4c3fb1}.notification-awesome,.notification-awesome .timer{background-color:#685dc3}.notification-awesome .timer-filler{background-color:#fff}.notification-awesome .notification-close{background-color:#685dc3}@keyframes timer{0%{width:100%}to{width:0}}.notification-item{display:flex;position:relative;border-radius:3px;margin-bottom:15px;box-shadow:1px 3px 4px rgba(0,0,0,.2);cursor:pointer}.notification-item .timer{width:100%;margin-top:10px}.notification-item .timer,.notification-item .timer .timer-filler{height:3px;border-radius:5px}.notification-item .notification-title{color:#fff;font-weight:700;font-size:14px;margin-top:5px;margin-bottom:5px}.notification-item .notification-message{color:#fff;max-width:calc(100% - 15px);font-size:14px;line-height:150%;word-wrap:break-word;margin-bottom:0;margin-top:0}.notification-item .notification-content{padding:8px 15px;display:inline-block;width:100%}.notification-item .notification-close{width:18px;height:18px;border-radius:50%;display:inline-block;position:absolute;right:10px;top:10px}.notification-item .notification-close:after{content:"\D7";position:absolute;transform:translate(-50%,-50%);color:#fff;font-size:12px;left:50%;top:50%}.n-parent{width:275px}.notification-container-mobile-bottom .n-parent,.notification-container-mobile-bottom .notification-item,.notification-container-mobile-top .n-parent,.notification-container-mobile-top .notification-item{max-width:100%;width:100%}.notification-container-bottom-right .n-parent,.notification-container-top-right .n-parent{margin-left:auto}.notification-container-bottom-left .n-parent,.notification-container-top-left .n-parent{margin-right:auto}.notification-container-mobile-bottom .n-parent,.notification-container-mobile-top .n-parent{margin-left:auto;margin-right:auto}
#nprogress{pointer-events:none}#nprogress .bar{background:#00b4ff;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #00b4ff,0 0 5px;opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#00b4ff;border-left-color:#00b4ff;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}


:root {

	--global--font-primary: var(--font-headings, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
	--global--font-secondary: var(--font-base, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);

	--global--font-size-base: 1.25rem;
	--global--font-size-xs: 1rem;
	--global--font-size-sm: 1.125rem;
	--global--font-size-md: 1.25rem;
	--global--font-size-lg: 1.5rem;
	--global--font-size-xl: 2.25rem;
	--global--font-size-xxl: 4rem;
	--global--font-size-xxxl: 5rem;
	--global--font-size-page-title: var(--global--font-size-xxl);
	--global--letter-spacing: normal;

	--global--line-height-body: 1.7;
	--global--line-height-heading: 1.3;
	--global--line-height-page-title: 1.1;

	--heading--font-family: var(--global--font-primary);
	--heading--font-size-h6: var(--global--font-size-xs);
	--heading--font-size-h5: var(--global--font-size-sm);
	--heading--font-size-h4: var(--global--font-size-lg);
	--heading--font-size-h3: calc(1.25 * var(--global--font-size-lg));
	--heading--font-size-h2: var(--global--font-size-xl);
	--heading--font-size-h1: var(--global--font-size-page-title);
	--heading--letter-spacing-h6: 0.05em;
	--heading--letter-spacing-h5: 0.05em;
	--heading--letter-spacing-h4: var(--global--letter-spacing);
	--heading--letter-spacing-h3: var(--global--letter-spacing);
	--heading--letter-spacing-h2: var(--global--letter-spacing);
	--heading--letter-spacing-h1: var(--global--letter-spacing);
	--heading--line-height-h6: var(--global--line-height-heading);
	--heading--line-height-h5: var(--global--line-height-heading);
	--heading--line-height-h4: var(--global--line-height-heading);
	--heading--line-height-h3: var(--global--line-height-heading);
	--heading--line-height-h2: var(--global--line-height-heading);
	--heading--line-height-h1: var(--global--line-height-page-title);
	--heading--font-weight: normal;
	--heading--font-weight-page-title: 300;
	--heading--font-weight-strong: 600;

	--latest-posts--title-font-family: var(--heading--font-family);
	--latest-posts--title-font-size: var(--heading--font-size-h3);
	--latest-posts--description-font-family: var(--global--font-secondary);
	--latest-posts--description-font-size: var(--global--font-size-sm);
	--list--font-family: var(--global--font-secondary);
	--definition-term--font-family: var(--global--font-primary);

	--global--color-black: #000;
	--global--color-dark-gray: #28303d;
	--global--color-gray: #39414d;
	--global--color-light-gray: #f0f0f0;
	--global--color-green: #d1e4dd;
	--global--color-blue: #d1dfe4;
	--global--color-purple: #d1d1e4;
	--global--color-red: #e4d1d1;
	--global--color-orange: #e4dad1;
	--global--color-yellow: #eeeadd;
	--global--color-white: #fff;
	--global--color-white-50: rgba(255, 255, 255, 0.5);
	--global--color-white-90: rgba(255, 255, 255, 0.9);
	--global--color-primary: var(--global--color-dark-gray);

	--global--color-secondary: var(--global--color-gray);

	--global--color-primary-hover: var(--global--color-primary);
	--global--color-background: var(--global--color-green);

	--global--color-border: var(--global--color-primary);

	--global--spacing-unit: 20px;
	--global--spacing-measure: unset;
	--global--spacing-horizontal: 25px;
	--global--spacing-vertical: 30px;

	--global--elevation: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);

	--form--font-family: var(--global--font-secondary);
	--form--font-size: var(--global--font-size-sm);
	--form--line-height: var(--global--line-height-body);
	--form--color-text: var(--global--color-dark-gray);
	--form--color-ranged: var(--global--color-secondary);
	--form--label-weight: 500;
	--form--border-color: var(--global--color-secondary);
	--form--border-width: 3px;
	--form--border-radius: 0;
	--form--spacing-unit: calc(0.5 * var(--global--spacing-unit));

	--cover--height: calc(15 * var(--global--spacing-vertical));
	--cover--color-foreground: var(--global--color-white);
	--cover--color-background: var(--global--color-black);

	--button--color-text: var(--global--color-background);
	--button--color-text-hover: var(--global--color-secondary);
	--button--color-text-active: var(--global--color-secondary);
	--button--color-background: var(--global--color-secondary);
	--button--color-background-active: var(--global--color-background);
	--button--font-family: var(--global--font-primary);
	--button--font-size: var(--global--font-size-base);
	--button--font-weight: 500;
	--button--line-height: 1.5;
	--button--border-width: 3px;
	--button--border-radius: 0;
	--button--padding-vertical: 15px;
	--button--padding-horizontal: calc(2 * var(--button--padding-vertical));

	--entry-header--color: var(--global--color-primary);
	--entry-header--color-link: currentColor;
	--entry-header--color-hover: var(--global--color-primary-hover);
	--entry-header--color-focus: var(--global--color-secondary);
	--entry-header--font-size: var(--heading--font-size-h2);
	--entry-content--font-family: var(--global--font-secondary);
	--entry-author-bio--font-family: var(--heading--font-family);
	--entry-author-bio--font-size: var(--heading--font-size-h4);

	--branding--color-text: var(--global--color-primary);
	--branding--color-link: var(--global--color-primary);
	--branding--color-link-hover: var(--global--color-secondary);
	--branding--title--font-family: var(--global--font-primary);
	--branding--title--font-size: var(--global--font-size-lg);
	--branding--title--font-size-mobile: var(--heading--font-size-h4);
	--branding--title--font-weight: normal;
	--branding--title--text-transform: uppercase;
	--branding--description--font-family: var(--global--font-secondary);
	--branding--description--font-size: var(--global--font-size-sm);
	--branding--description--font-family: var(--global--font-secondary);
	--branding--logo--max-width: 300px;
	--branding--logo--max-height: 100px;
	--branding--logo--max-width-mobile: 96px;
	--branding--logo--max-height-mobile: 96px;

	--primary-nav--font-family: var(--global--font-secondary);
	--primary-nav--font-family-mobile: var(--global--font-primary);
	--primary-nav--font-size: var(--global--font-size-md);
	--primary-nav--font-size-sub-menu: var(--global--font-size-xs);
	--primary-nav--font-size-mobile: var(--global--font-size-sm);
	--primary-nav--font-size-sub-menu-mobile: var(--global--font-size-sm);
	--primary-nav--font-size-button: var(--global--font-size-xs);
	--primary-nav--font-style: normal;
	--primary-nav--font-style-sub-menu-mobile: normal;
	--primary-nav--font-weight: normal;
	--primary-nav--font-weight-button: 500;
	--primary-nav--color-link: var(--global--color-primary);
	--primary-nav--color-link-hover: var(--global--color-primary-hover);
	--primary-nav--color-text: var(--global--color-primary);
	--primary-nav--padding: calc(0.66 * var(--global--spacing-unit));
	--primary-nav--border-color: var(--global--color-primary);

	--pagination--color-text: var(--global--color-primary);
	--pagination--color-link-hover: var(--global--color-primary-hover);
	--pagination--font-family: var(--global--font-secondary);
	--pagination--font-size: var(--global--font-size-lg);
	--pagination--font-weight: normal;
	--pagination--font-weight-strong: 600;

	--footer--color-text: var(--global--color-primary);
	--footer--color-link: var(--global--color-primary);
	--footer--color-link-hover: var(--global--color-primary-hover);
	--footer--font-family: var(--global--font-primary);
	--footer--font-size: var(--global--font-size-sm);

	--pullquote--font-family: var(--global--font-primary);
	--pullquote--font-size: var(--heading--font-size-h3);
	--pullquote--font-style: normal;
	--pullquote--letter-spacing: var(--heading--letter-spacing-h4);
	--pullquote--line-height: var(--global--line-height-heading);
	--pullquote--border-width: 3px;
	--pullquote--border-color: var(--global--color-primary);
	--pullquote--color-foreground: var(--global--color-primary);
	--pullquote--color-background: var(--global--color-background);
	--quote--font-family: var(--global--font-secondary);
	--quote--font-size: var(--global--font-size-md);
	--quote--font-size-large: var(--global--font-size-xl);
	--quote--font-style: normal;
	--quote--font-weight: 700;
	--quote--font-weight-strong: bolder;
	--quote--font-style-large: normal;
	--quote--font-style-cite: normal;
	--quote--line-height: var(--global--line-height-body);
	--quote--line-height-large: 1.35;
	--separator--border-color: var(--global--color-border);
	--separator--height: 1px;

	--table--stripes-border-color: var(--global--color-light-gray);
	--table--stripes-background-color: var(--global--color-light-gray);
	--table--has-background-text-color: var(--global--color-dark-gray);

	--widget--line-height-list: 1.9;
	--widget--line-height-title: 1.4;
	--widget--font-weight-title: 700;
	--widget--spacing-menu: calc(0.66 * var(--global--spacing-unit));

	--global--admin-bar--height: 0;
}

figcaption,
.wp-caption,
.wp-caption-text,
.wp-block-embed figcaption {
	color: currentColor;
	font-size: var(--global--font-size-xs);
	line-height: var(--global--line-height-body);
	margin-top: calc(0.5 * var(--global--spacing-unit));
	margin-bottom: var(--global--spacing-unit);
	text-align: center;
}

.alignleft figcaption,
.alignright figcaption,
.alignleft .wp-caption,
.alignright .wp-caption,
.alignleft .wp-caption-text,
.alignright .wp-caption-text,
.alignleft .wp-block-embed figcaption,
.alignright .wp-block-embed figcaption {
	margin-bottom: 0;
}

.page-content .wp-smiley,
.entry-content .wp-smiley,
.comment-content .wp-smiley {
	border: none;
	margin-bottom: 0;
	margin-top: 0;
	padding: 0;
}


.wp-block-button:not(.is-style-outline) .wp-block-button__link:active {
	color: var(--button--color-text-active) !important;
	background: transparent !important;
	border-color: var(--button--color-background);
}

.wp-block-button:not(.is-style-outline) .wp-block-button__link:hover {
	color: var(--button--color-text-hover) !important;
	background: transparent !important;
	border-color: var(--button--color-background);
}

.wp-block-button:not(.is-style-outline) .wp-block-button__link:focus {
	color: var(--button--color-text) !important;
	background: var(--button--color-background) !important;
}

.wp-block-button.is-style-outline .wp-block-button__link {
	padding: var(--button--padding-vertical) var(--button--padding-horizontal);
}

.wp-block-button.is-style-outline .wp-block-button__link:not(.has-background) {
	background: transparent;
}

.wp-block-button.is-style-outline .wp-block-button__link:not(.has-background):not(.has-text-color) {
	background: transparent;
	color: var(--button--color-background);
	border-color: var(--button--color-background);
}

.wp-block-button.is-style-outline .wp-block-button__link.has-background:not(.has-text-color) {
	color: currentColor;
}

.wp-block-button.is-style-outline .wp-block-button__link.has-background.has-gray-background-color:not(.has-text-color),
.wp-block-button.is-style-outline .wp-block-button__link.has-background.has-dark-gray-background-color:not(.has-text-color),
.wp-block-button.is-style-outline .wp-block-button__link.has-background.has-black-background-color:not(.has-text-color) {
	color: var(--global--color-white);
}

.is-dark-theme .wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color).has-background {
	color: var(--global--color-dark-gray);
}

.is-dark-theme .wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color).has-background.has-gray-background-color,
.is-dark-theme .wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color).has-background.has-dark-gray-background-color,
.is-dark-theme .wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color).has-background.has-black-background-color {
	color: var(--global--color-white);
}

.wp-block-button.is-style-outline .wp-block-button__link.has-text-color,
.wp-block-button.is-style-outline .wp-block-button__link.has-background.has-text-color {
	border-color: currentColor;
}

.wp-block-button.is-style-outline .wp-block-button__link:active,
.wp-block-button.is-style-outline .wp-block-button__link:hover {
	color: var(--button--color-text) !important;
	background: var(--button--color-background) !important;
	border-color: var(--button--color-background);
}

.wp-block-button.is-style-outline .wp-block-button__link:active.has-text-color,
.wp-block-button.is-style-outline .wp-block-button__link:hover.has-text-color {
	border-color: var(--button--color-background);
}

.wp-block-button.is-style-outline .wp-block-button__link:focus {
	color: var(--button--color-background) !important;
	background: transparent !important;
}

.wp-block-button .is-style-squared .wp-block-button__link {
	border-radius: 0;
}

.is-style-outline .wp-block-button__link[style*=radius]:focus,
.wp-block-button a.wp-block-button__link[style*=radius]:focus {
	outline-offset: 2px;
	outline: 2px dotted var(--button--color-background);
}

.wp-block-code {
	border-color: var(--global--color-border);
	border-radius: 0;
	border-style: solid;
	border-width: 0.1rem;
	padding: var(--global--spacing-unit);
}

.wp-block-code code {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	white-space: pre;
	overflow-x: auto;
	display: block;
}

.wp-block-columns:not(.alignwide):not(.alignfull) {
	clear: both;
}

.wp-block-columns .wp-block-column > * {
	margin-top: calc(0.66 * var(--global--spacing-vertical));
	margin-bottom: calc(0.66 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-columns .wp-block-column > * {
		margin-top: var(--global--spacing-vertical);
		margin-bottom: var(--global--spacing-vertical);
	}
}

.wp-block-columns .wp-block-column > *:first-child {
	margin-top: 0;
}

.wp-block-columns .wp-block-column > *:last-child {
	margin-bottom: 0;
}

.wp-block-columns .wp-block-column:last-child {
	margin-bottom: 0;
}

.wp-block-columns .wp-block-column:not(:last-child) {
	margin-bottom: calc(0.66 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-columns .wp-block-column:not(:last-child) {
		margin-bottom: var(--global--spacing-vertical);
	}
}
@media only screen and (min-width: 822px) {

	.wp-block-columns .wp-block-column:not(:last-child) {
		margin-bottom: 0;
	}
}

.wp-block-columns.is-style-twentytwentyone-columns-overlap {
	justify-content: space-around;
}
@media only screen and (min-width: 652px) {

	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) {
		margin-left: calc(-2 * var(--global--spacing-horizontal));
		margin-top: calc(2.5 * var(--global--spacing-horizontal));
		z-index: 2;
	}

	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > p:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h1:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h2:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h3:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h4:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h5:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > h6:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > ul:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > ol:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > pre:not(.has-background) {
		background-color: var(--global--color-background);
		padding: var(--global--spacing-unit);
	}

	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > ul:not(.has-background),
	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n) > ol:not(.has-background) {
		padding-left: calc(2 * var(--global--spacing-horizontal));
	}

	.wp-block-columns.is-style-twentytwentyone-columns-overlap .wp-block-column:nth-child(2n).is-vertically-aligned-center {
		margin-top: 0;
	}
}

.wp-block-columns.alignfull .wp-block-column p:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h1:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h2:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h3:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h4:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h5:not(.has-background),
.wp-block-columns.alignfull .wp-block-column h6:not(.has-background) {
	padding-left: var(--global--spacing-unit);
	padding-right: var(--global--spacing-unit);
}

.wp-block-columns {
    display: flex;
    margin-bottom: 28px;
    flex-wrap: wrap; }
    @media (min-width: 782px) {
      .wp-block-columns {
        flex-wrap: nowrap; } }
  
  .wp-block-column {
    margin-bottom: 1em;
    flex-grow: 1;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: break-word; }
    @media (max-width: 599px) {
      .wp-block-column {
        flex-basis: 100% !important; } }
    @media (min-width: 600px) {
      .wp-block-column {
        flex-basis: calc(50% - 16px);
        flex-grow: 0; }
        .wp-block-column:nth-child(even) {
          margin-left: 32px; } }
    @media (min-width: 782px) {
      .wp-block-column:not(:first-child) {
        margin-left: 32px; } }

  .wp-block-columns.are-vertically-aligned-top {
    align-items: flex-start; }
  
  .wp-block-columns.are-vertically-aligned-center {
    align-items: center; }
  
  .wp-block-columns.are-vertically-aligned-bottom {
    align-items: flex-end; }
  

  .wp-block-column.is-vertically-aligned-top {
    align-self: flex-start; }
  
  .wp-block-column.is-vertically-aligned-center {
    align-self: center; }
  
  .wp-block-column.is-vertically-aligned-bottom {
    align-self: flex-end; }

.wp-block-cover,
.wp-block-cover-image {
	background-color: var(--cover--color-background);
	min-height: var(--cover--height);
	margin-top: inherit;
	margin-bottom: inherit;
}

.wp-block-cover:not(.alignwide):not(.alignfull),
.wp-block-cover-image:not(.alignwide):not(.alignfull) {
	clear: both;
}

.wp-block-cover.alignfull,
.wp-block-cover-image.alignfull {
	margin-top: 0;
	margin-bottom: 0;
}

.wp-block-cover .wp-block-cover__inner-container,
.wp-block-cover .wp-block-cover-image-text,
.wp-block-cover .wp-block-cover-text,
.wp-block-cover-image .wp-block-cover__inner-container,
.wp-block-cover-image .wp-block-cover-image-text,
.wp-block-cover-image .wp-block-cover-text {
	color: currentColor;
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-cover .wp-block-cover__inner-container a:not(.wp-block-button__link):not(.wp-block-file__button),
.wp-block-cover .wp-block-cover-image-text a:not(.wp-block-button__link):not(.wp-block-file__button),
.wp-block-cover .wp-block-cover-text a:not(.wp-block-button__link):not(.wp-block-file__button),
.wp-block-cover-image .wp-block-cover__inner-container a:not(.wp-block-button__link):not(.wp-block-file__button),
.wp-block-cover-image .wp-block-cover-image-text a:not(.wp-block-button__link):not(.wp-block-file__button),
.wp-block-cover-image .wp-block-cover-text a:not(.wp-block-button__link):not(.wp-block-file__button) {
	color: currentColor;
}

.wp-block-cover .wp-block-cover__inner-container .has-link-color a,
.wp-block-cover .wp-block-cover-image-text .has-link-color a,
.wp-block-cover .wp-block-cover-text .has-link-color a,
.wp-block-cover-image .wp-block-cover__inner-container .has-link-color a,
.wp-block-cover-image .wp-block-cover-image-text .has-link-color a,
.wp-block-cover-image .wp-block-cover-text .has-link-color a {
	color: var(--wp--style--color--link, var(--global--color-primary));
}

.wp-block-cover:not([class*=background-color]) .wp-block-cover__inner-container,
.wp-block-cover:not([class*=background-color]) .wp-block-cover-image-text,
.wp-block-cover:not([class*=background-color]) .wp-block-cover-text,
.wp-block-cover-image:not([class*=background-color]) .wp-block-cover__inner-container,
.wp-block-cover-image:not([class*=background-color]) .wp-block-cover-image-text,
.wp-block-cover-image:not([class*=background-color]) .wp-block-cover-text {
	color: var(--cover--color-foreground);
}

.wp-block-cover h2,
.wp-block-cover-image h2 {
	font-size: var(--heading--font-size-h2);
	letter-spacing: var(--heading--letter-spacing-h2);
	line-height: var(--heading--line-height-h2);
	max-width: inherit;
	text-align: inherit;
	padding: 0;
}

.wp-block-cover h2.has-text-align-left,
.wp-block-cover-image h2.has-text-align-left {
	text-align: left;
}

.wp-block-cover h2.has-text-align-center,
.wp-block-cover-image h2.has-text-align-center {
	text-align: center;
}

.wp-block-cover h2.has-text-align-right,
.wp-block-cover-image h2.has-text-align-right {
	text-align: right;
}

.wp-block-cover .wp-block-cover__inner-container,
.wp-block-cover-image .wp-block-cover__inner-container {
	width: calc(100% - calc(2 * var(--global--spacing-vertical)));
}

.wp-block-cover .wp-block-cover__inner-container > *,
.wp-block-cover-image .wp-block-cover__inner-container > * {
	margin-top: calc(0.666 * var(--global--spacing-vertical));
	margin-bottom: calc(0.666 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-cover .wp-block-cover__inner-container > *,
	.wp-block-cover-image .wp-block-cover__inner-container > * {
		margin-top: var(--global--spacing-vertical);
		margin-bottom: var(--global--spacing-vertical);
	}
}

.wp-block-cover .wp-block-cover__inner-container > *:first-child,
.wp-block-cover-image .wp-block-cover__inner-container > *:first-child {
	margin-top: 0;
}

.wp-block-cover .wp-block-cover__inner-container > *:last-child,
.wp-block-cover-image .wp-block-cover__inner-container > *:last-child {
	margin-bottom: 0;
}

.wp-block-cover.alignleft,
.wp-block-cover.alignright,
.wp-block-cover-image.alignleft,
.wp-block-cover-image.alignright {
	margin-top: 0;
}

.wp-block-cover.alignleft > *,
.wp-block-cover.alignright > *,
.wp-block-cover-image.alignleft > *,
.wp-block-cover-image.alignright > * {
	margin-top: calc(2 * var(--global--spacing-vertical));
	margin-bottom: calc(2 * var(--global--spacing-vertical));
	padding-left: var(--global--spacing-horizontal);
	padding-right: var(--global--spacing-horizontal);
	width: 100%;
}

.wp-block-cover.has-left-content,
.wp-block-cover.has-right-content,
.wp-block-cover-image.has-left-content,
.wp-block-cover-image.has-right-content {
	justify-content: center;
}

.wp-block-cover.is-style-twentytwentyone-border,
.wp-block-cover-image.is-style-twentytwentyone-border {
	border: calc(3 * var(--separator--height)) solid var(--global--color-border);
}

.wp-block-file a.wp-block-file__button:active,
.wp-block-file a.wp-block-file__button:focus,
.wp-block-file a.wp-block-file__button:hover {
	color: var(--button--color-text-hover);
	opacity: inherit;
}

.wp-block-file a.wp-block-file__button:visited {
	color: var(--button--color-text);
}

.wp-block-file a.wp-block-file__button:visited:hover {
	color: var(--button--color-text-hover);
}

.wp-block-file .wp-block-file__button {
	line-height: var(--button--line-height);
	color: var(--button--color-text);
	cursor: pointer;
	font-weight: var(--button--font-weight);
	font-family: var(--button--font-family);
	font-size: var(--button--font-size);
	background-color: var(--button--color-background);
	border-radius: var(--button--border-radius);
	border: var(--button--border-width) solid var(--button--color-background);
	text-decoration: none;
	padding: var(--button--padding-vertical) var(--button--padding-horizontal);
	display: inline-block;
}

.wp-block-file .wp-block-file__button:focus {
	background: transparent;
	outline-offset: -6px;
	outline: 2px dotted currentColor;
}

.is-dark-theme .wp-block-file .wp-block-file__button:focus {
	color: var(--button--color-background);
}

.wp-block-file .wp-block-file__button:focus:not(.has-background) {
	color: var(--button--color-text-hover);
}

.wp-block-file .wp-block-file__button:disabled {
	background-color: var(--global--color-white-50);
	border-color: var(--global--color-white-50);
	color: var(--button--color-text-active);
}

.wp-block-gallery {
	margin: 0 auto;
}

.wp-block-gallery .blocks-gallery-image,
.wp-block-gallery .blocks-gallery-item {
	width: calc((100% - var(--global--spacing-unit)) / 2);
}

.wp-block-gallery .blocks-gallery-image figcaption,
.wp-block-gallery .blocks-gallery-item figcaption {
	margin: 0;
	color: var(--global--color-white);
	font-size: var(--global--font-size-xs);
}

.wp-block-gallery .blocks-gallery-image figcaption a,
.wp-block-gallery .blocks-gallery-item figcaption a {
	color: var(--global--color-white);
}

.wp-block-gallery .blocks-gallery-image figcaption a:focus,
.wp-block-gallery .blocks-gallery-item figcaption a:focus {
	background-color: transparent;
	outline: 2px solid var(--wp--style--color--link, var(--global--color-primary));
	text-decoration: none;
}

.wp-block-gallery .blocks-gallery-image a:focus img,
.wp-block-gallery .blocks-gallery-item a:focus img {
	outline-offset: 2px;
}
.wp-block-gallery,
  .blocks-gallery-grid {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin-bottom: 0; }
    .wp-block-gallery .blocks-gallery-image,
    .wp-block-gallery .blocks-gallery-item,
    .blocks-gallery-grid .blocks-gallery-image,
    .blocks-gallery-grid .blocks-gallery-item {
      margin: 0 16px 16px 0;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: center;
      position: relative; }
      .wp-block-gallery .blocks-gallery-image figure,
      .wp-block-gallery .blocks-gallery-item figure,
      .blocks-gallery-grid .blocks-gallery-image figure,
      .blocks-gallery-grid .blocks-gallery-item figure {
        margin: 0;
        height: 100%; }
        @supports ((position: -webkit-sticky) or (position: sticky)) {
          .wp-block-gallery .blocks-gallery-image figure,
          .wp-block-gallery .blocks-gallery-item figure,
          .blocks-gallery-grid .blocks-gallery-image figure,
          .blocks-gallery-grid .blocks-gallery-item figure {
            display: flex;
            align-items: flex-end;
            justify-content: flex-start; } }
      .wp-block-gallery .blocks-gallery-image img,
      .wp-block-gallery .blocks-gallery-item img,
      .blocks-gallery-grid .blocks-gallery-image img,
      .blocks-gallery-grid .blocks-gallery-item img {
        display: block;
        max-width: 100%;
        height: auto; }
      .wp-block-gallery .blocks-gallery-image img,
      .wp-block-gallery .blocks-gallery-item img,
      .blocks-gallery-grid .blocks-gallery-image img,
      .blocks-gallery-grid .blocks-gallery-item img {
        width: 100%; }
        @supports ((position: -webkit-sticky) or (position: sticky)) {
          .wp-block-gallery .blocks-gallery-image img,
          .wp-block-gallery .blocks-gallery-item img,
          .blocks-gallery-grid .blocks-gallery-image img,
          .blocks-gallery-grid .blocks-gallery-item img {
            width: auto; } }
      .wp-block-gallery .blocks-gallery-image figcaption,
      .wp-block-gallery .blocks-gallery-item figcaption,
      .blocks-gallery-grid .blocks-gallery-image figcaption,
      .blocks-gallery-grid .blocks-gallery-item figcaption {
        position: absolute;
        bottom: 0;
        width: 100%;
        max-height: 100%;
        overflow: auto;
        padding: 40px 10px 9px;
        color: #fff;
        text-align: center;
        font-size: 13px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.3) 70%, transparent); }
        .wp-block-gallery .blocks-gallery-image figcaption img,
        .wp-block-gallery .blocks-gallery-item figcaption img,
        .blocks-gallery-grid .blocks-gallery-image figcaption img,
        .blocks-gallery-grid .blocks-gallery-item figcaption img {
          display: inline; }
    .wp-block-gallery.is-cropped .blocks-gallery-image a,
    .wp-block-gallery.is-cropped .blocks-gallery-image img,
    .wp-block-gallery.is-cropped .blocks-gallery-item a,
    .wp-block-gallery.is-cropped .blocks-gallery-item img,
    .blocks-gallery-grid.is-cropped .blocks-gallery-image a,
    .blocks-gallery-grid.is-cropped .blocks-gallery-image img,
    .blocks-gallery-grid.is-cropped .blocks-gallery-item a,
    .blocks-gallery-grid.is-cropped .blocks-gallery-item img {
      width: 100%; }
      @supports ((position: -webkit-sticky) or (position: sticky)) {
        .wp-block-gallery.is-cropped .blocks-gallery-image a,
        .wp-block-gallery.is-cropped .blocks-gallery-image img,
        .wp-block-gallery.is-cropped .blocks-gallery-item a,
        .wp-block-gallery.is-cropped .blocks-gallery-item img,
        .blocks-gallery-grid.is-cropped .blocks-gallery-image a,
        .blocks-gallery-grid.is-cropped .blocks-gallery-image img,
        .blocks-gallery-grid.is-cropped .blocks-gallery-item a,
        .blocks-gallery-grid.is-cropped .blocks-gallery-item img {
          height: 100%;
          flex: 1;
          -o-object-fit: cover;
             object-fit: cover; } }
    .wp-block-gallery .blocks-gallery-image,
    .wp-block-gallery .blocks-gallery-item,
    .blocks-gallery-grid .blocks-gallery-image,
    .blocks-gallery-grid .blocks-gallery-item {
      width: calc((100% - 16px) / 2); }
      .wp-block-gallery .blocks-gallery-image:nth-of-type(even),
      .wp-block-gallery .blocks-gallery-item:nth-of-type(even),
      .blocks-gallery-grid .blocks-gallery-image:nth-of-type(even),
      .blocks-gallery-grid .blocks-gallery-item:nth-of-type(even) {
        margin-right: 0; }
    .wp-block-gallery.columns-1 .blocks-gallery-image,
    .wp-block-gallery.columns-1 .blocks-gallery-item,
    .blocks-gallery-grid.columns-1 .blocks-gallery-image,
    .blocks-gallery-grid.columns-1 .blocks-gallery-item {
      width: 100%;
      margin-right: 0; }
    @media (min-width: 600px) {
      .wp-block-gallery.columns-3 .blocks-gallery-image,
      .wp-block-gallery.columns-3 .blocks-gallery-item,
      .blocks-gallery-grid.columns-3 .blocks-gallery-image,
      .blocks-gallery-grid.columns-3 .blocks-gallery-item {
        width: calc((100% - 16px * 2) / 3);
        margin-right: 16px; }
        @supports (-ms-ime-align: auto) {
          .wp-block-gallery.columns-3 .blocks-gallery-image,
          .wp-block-gallery.columns-3 .blocks-gallery-item,
          .blocks-gallery-grid.columns-3 .blocks-gallery-image,
          .blocks-gallery-grid.columns-3 .blocks-gallery-item {
            width: calc((100% - 16px * 2) / 3 - 1px); } }
      .wp-block-gallery.columns-4 .blocks-gallery-image,
      .wp-block-gallery.columns-4 .blocks-gallery-item,
      .blocks-gallery-grid.columns-4 .blocks-gallery-image,
      .blocks-gallery-grid.columns-4 .blocks-gallery-item {
        width: calc((100% - 16px * 3) / 4);
        margin-right: 16px; }
        @supports (-ms-ime-align: auto) {
          .wp-block-gallery.columns-4 .blocks-gallery-image,
          .wp-block-gallery.columns-4 .blocks-gallery-item,
          .blocks-gallery-grid.columns-4 .blocks-gallery-image,
          .blocks-gallery-grid.columns-4 .blocks-gallery-item {
            width: calc((100% - 16px * 3) / 4 - 1px); } }
      .wp-block-gallery.columns-5 .blocks-gallery-image,
      .wp-block-gallery.columns-5 .blocks-gallery-item,
      .blocks-gallery-grid.columns-5 .blocks-gallery-image,
      .blocks-gallery-grid.columns-5 .blocks-gallery-item {
        width: calc((100% - 16px * 4) / 5);
        margin-right: 16px; }
        @supports (-ms-ime-align: auto) {
          .wp-block-gallery.columns-5 .blocks-gallery-image,
          .wp-block-gallery.columns-5 .blocks-gallery-item,
          .blocks-gallery-grid.columns-5 .blocks-gallery-image,
          .blocks-gallery-grid.columns-5 .blocks-gallery-item {
            width: calc((100% - 16px * 4) / 5 - 1px); } }
      .wp-block-gallery.columns-6 .blocks-gallery-image,
      .wp-block-gallery.columns-6 .blocks-gallery-item,
      .blocks-gallery-grid.columns-6 .blocks-gallery-image,
      .blocks-gallery-grid.columns-6 .blocks-gallery-item {
        width: calc((100% - 16px * 5) / 6);
        margin-right: 16px; }
        @supports (-ms-ime-align: auto) {
          .wp-block-gallery.columns-6 .blocks-gallery-image,
          .wp-block-gallery.columns-6 .blocks-gallery-item,
          .blocks-gallery-grid.columns-6 .blocks-gallery-image,
          .blocks-gallery-grid.columns-6 .blocks-gallery-item {
            width: calc((100% - 16px * 5) / 6 - 1px); } }
      .wp-block-gallery.columns-7 .blocks-gallery-image,
      .wp-block-gallery.columns-7 .blocks-gallery-item,
      .blocks-gallery-grid.columns-7 .blocks-gallery-image,
      .blocks-gallery-grid.columns-7 .blocks-gallery-item {
        width: calc((100% - 16px * 6) / 7);
        margin-right: 16px; }
        @supports (-ms-ime-align: auto) {
          .wp-block-gallery.columns-7 .blocks-gallery-image,
          .wp-block-gallery.columns-7 .blocks-gallery-item,
          .blocks-gallery-grid.columns-7 .blocks-gallery-image,
          .blocks-gallery-grid.columns-7 .blocks-gallery-item {
            width: calc((100% - 16px * 6) / 7 - 1px); } }
      .wp-block-gallery.columns-8 .blocks-gallery-image,
      .wp-block-gallery.columns-8 .blocks-gallery-item,
      .blocks-gallery-grid.columns-8 .blocks-gallery-image,
      .blocks-gallery-grid.columns-8 .blocks-gallery-item {
        width: calc((100% - 16px * 7) / 8);
        margin-right: 16px; }
        @supports (-ms-ime-align: auto) {
          .wp-block-gallery.columns-8 .blocks-gallery-image,
          .wp-block-gallery.columns-8 .blocks-gallery-item,
          .blocks-gallery-grid.columns-8 .blocks-gallery-image,
          .blocks-gallery-grid.columns-8 .blocks-gallery-item {
            width: calc((100% - 16px * 7) / 8 - 1px); } }
      .wp-block-gallery.columns-1 .blocks-gallery-image:nth-of-type(1n),
      .wp-block-gallery.columns-1 .blocks-gallery-item:nth-of-type(1n),
      .blocks-gallery-grid.columns-1 .blocks-gallery-image:nth-of-type(1n),
      .blocks-gallery-grid.columns-1 .blocks-gallery-item:nth-of-type(1n) {
        margin-right: 0; }
      .wp-block-gallery.columns-2 .blocks-gallery-image:nth-of-type(2n),
      .wp-block-gallery.columns-2 .blocks-gallery-item:nth-of-type(2n),
      .blocks-gallery-grid.columns-2 .blocks-gallery-image:nth-of-type(2n),
      .blocks-gallery-grid.columns-2 .blocks-gallery-item:nth-of-type(2n) {
        margin-right: 0; }
      .wp-block-gallery.columns-3 .blocks-gallery-image:nth-of-type(3n),
      .wp-block-gallery.columns-3 .blocks-gallery-item:nth-of-type(3n),
      .blocks-gallery-grid.columns-3 .blocks-gallery-image:nth-of-type(3n),
      .blocks-gallery-grid.columns-3 .blocks-gallery-item:nth-of-type(3n) {
        margin-right: 0; }
      .wp-block-gallery.columns-4 .blocks-gallery-image:nth-of-type(4n),
      .wp-block-gallery.columns-4 .blocks-gallery-item:nth-of-type(4n),
      .blocks-gallery-grid.columns-4 .blocks-gallery-image:nth-of-type(4n),
      .blocks-gallery-grid.columns-4 .blocks-gallery-item:nth-of-type(4n) {
        margin-right: 0; }
      .wp-block-gallery.columns-5 .blocks-gallery-image:nth-of-type(5n),
      .wp-block-gallery.columns-5 .blocks-gallery-item:nth-of-type(5n),
      .blocks-gallery-grid.columns-5 .blocks-gallery-image:nth-of-type(5n),
      .blocks-gallery-grid.columns-5 .blocks-gallery-item:nth-of-type(5n) {
        margin-right: 0; }
      .wp-block-gallery.columns-6 .blocks-gallery-image:nth-of-type(6n),
      .wp-block-gallery.columns-6 .blocks-gallery-item:nth-of-type(6n),
      .blocks-gallery-grid.columns-6 .blocks-gallery-image:nth-of-type(6n),
      .blocks-gallery-grid.columns-6 .blocks-gallery-item:nth-of-type(6n) {
        margin-right: 0; }
      .wp-block-gallery.columns-7 .blocks-gallery-image:nth-of-type(7n),
      .wp-block-gallery.columns-7 .blocks-gallery-item:nth-of-type(7n),
      .blocks-gallery-grid.columns-7 .blocks-gallery-image:nth-of-type(7n),
      .blocks-gallery-grid.columns-7 .blocks-gallery-item:nth-of-type(7n) {
        margin-right: 0; }
      .wp-block-gallery.columns-8 .blocks-gallery-image:nth-of-type(8n),
      .wp-block-gallery.columns-8 .blocks-gallery-item:nth-of-type(8n),
      .blocks-gallery-grid.columns-8 .blocks-gallery-image:nth-of-type(8n),
      .blocks-gallery-grid.columns-8 .blocks-gallery-item:nth-of-type(8n) {
        margin-right: 0; } }
    .wp-block-gallery .blocks-gallery-image:last-child,
    .wp-block-gallery .blocks-gallery-item:last-child,
    .blocks-gallery-grid .blocks-gallery-image:last-child,
    .blocks-gallery-grid .blocks-gallery-item:last-child {
      margin-right: 0; }
    .wp-block-gallery.alignleft, .wp-block-gallery.alignright,
    .blocks-gallery-grid.alignleft,
    .blocks-gallery-grid.alignright {
      max-width: 305px;
      width: 100%; }
    .wp-block-gallery.alignleft, .wp-block-gallery.aligncenter, .wp-block-gallery.alignright,
    .blocks-gallery-grid.alignleft,
    .blocks-gallery-grid.aligncenter,
    .blocks-gallery-grid.alignright {
      display: flex; }
    .wp-block-gallery.aligncenter .blocks-gallery-item figure,
    .blocks-gallery-grid.aligncenter .blocks-gallery-item figure {
      justify-content: center; }
  
  figure.wp-block-gallery {
    display: block;
    margin: 0; }

.wp-block-group {
	display: block;
	clear: both;
	display: flow-root;
}

.wp-block-group:before,
.wp-block-group:after {
	content: "";
	display: block;
	clear: both;
}

.wp-block-group .wp-block-group__inner-container {
	margin-left: auto;
	margin-right: auto;
}

.wp-block-group .wp-block-group__inner-container > * {
	margin-top: calc(0.666 * var(--global--spacing-vertical));
	margin-bottom: calc(0.666 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-group .wp-block-group__inner-container > * {
		margin-top: var(--global--spacing-vertical);
		margin-bottom: var(--global--spacing-vertical);
	}
}

.wp-block-group .wp-block-group__inner-container > *:first-child {
	margin-top: 0;
}

.wp-block-group .wp-block-group__inner-container > *:last-child {
	margin-bottom: 0;
}

.wp-block-group.has-background {
	padding: calc(0.666 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-group.has-background {
		padding: var(--global--spacing-vertical);
	}
}

.wp-block-group.is-style-twentytwentyone-border {
	border: calc(3 * var(--separator--height)) solid var(--global--color-border);
	padding: var(--global--spacing-vertical);
}

.wp-block-group.has-background .wp-block-group__inner-container > .alignfull,
.wp-block-group.has-background .wp-block-group__inner-container > hr.wp-block-separator:not(.is-style-dots):not(.alignwide).alignfull,
.wp-block-group.is-style-twentytwentyone-border .wp-block-group__inner-container > .alignfull,
.wp-block-group.is-style-twentytwentyone-border .wp-block-group__inner-container > hr.wp-block-separator:not(.is-style-dots):not(.alignwide).alignfull {
	max-width: calc(var(--responsive--alignfull-width) + (2 * var(--global--spacing-vertical)));
	width: calc(var(--responsive--alignfull-width) + (2 * var(--global--spacing-vertical)));
	margin-left: calc(-1 * var(--global--spacing-vertical));
}


.wp-block-image {
	text-align: center;
}

.wp-block-image figcaption {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	line-height: var(--global--line-height-body);
	margin-top: calc(0.5 * var(--global--spacing-unit));
	margin-bottom: var(--global--spacing-unit);
	text-align: center;
}

.wp-block-image .alignright {
	margin-left: var(--global--spacing-horizontal);
}

.wp-block-image .alignleft {
	margin-right: var(--global--spacing-horizontal);
}

.wp-block-image a:focus img {
	outline-offset: 2px;
}

.entry-content > *[class=wp-block-image],
.entry-content [class*=inner-container] > *[class=wp-block-image] {
	margin-top: 0;
	margin-bottom: 0;
}

.entry-content > *[class=wp-block-image] + *,
.entry-content [class*=inner-container] > *[class=wp-block-image] + * {
	margin-top: 0;
}

img {
	height: auto;
	max-width: 100%;
	vertical-align: middle;
}

.wp-block-image.is-style-twentytwentyone-border img,
.wp-block-image.is-style-twentytwentyone-image-frame img {
	border: calc(3 * var(--separator--height)) solid var(--global--color-border);
}

.wp-block-image.is-style-twentytwentyone-image-frame img {
	padding: var(--global--spacing-unit);
}

@media only screen and (min-width: 482px) {

	.entry-content > .wp-block-image > .alignleft,
	.entry-content > .wp-block-image > .alignright {
		max-width: 50%;
	}
}
@media only screen and (max-width: 481px) {

	.entry-content > .wp-block-image > .alignleft,
	.entry-content > .wp-block-image > .alignright {
		margin-left: 0;
		margin-right: 0;
	}
}

.wp-block-image {
    max-width: 100%;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0; }
    .wp-block-image img {
      max-width: 100%; }
    .wp-block-image.aligncenter {
      text-align: center; }
    .wp-block-image.alignfull img,
    .wp-block-image.alignwide img {
      width: 100%; }
    .wp-block-image .alignleft,
    .wp-block-image .alignright,
    .wp-block-image .aligncenter, .wp-block-image.is-resized {
      display: table;
      margin-left: 0;
      margin-right: 0; }
      .wp-block-image .alignleft > figcaption,
      .wp-block-image .alignright > figcaption,
      .wp-block-image .aligncenter > figcaption, .wp-block-image.is-resized > figcaption {
        display: table-caption;
        caption-side: bottom; }
        
    .wp-block-image .alignleft {
      
      float: left;
      
      margin-right: 1em; }
    .wp-block-image .alignright {
      
      float: right;
      
      margin-left: 1em; }
    .wp-block-image .aligncenter {
      margin-left: auto;
      margin-right: auto;
        width: 100%; }

.wp-block-latest-comments {
	padding-left: 0;
}

.wp-block-latest-comments .wp-block-latest-comments__comment {
	font-size: var(--global--font-size-sm);
	line-height: var(--global--line-height-body);

	/* Vertical margins logic */
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-latest-comments .wp-block-latest-comments__comment:first-child {
	margin-top: 0;
}

.wp-block-latest-comments .wp-block-latest-comments__comment:last-child {
	margin-bottom: 0;
}

.wp-block-latest-comments .wp-block-latest-comments__comment-meta {
	font-family: var(--heading--font-family);
}

.wp-block-latest-comments .wp-block-latest-comments__comment-date {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-sm);
}

.wp-block-latest-comments .wp-block-latest-comments__comment-excerpt p {
	font-size: var(--global--font-size-sm);
	line-height: var(--global--line-height-body);
	margin: 0;
}

.wp-block-latest-posts {
	padding-left: 0;
}

.wp-block-latest-posts:not(.is-grid) > li {
	margin-top: calc(1.666 * var(--global--spacing-vertical));
	margin-bottom: calc(1.666 * var(--global--spacing-vertical));
}

.wp-block-latest-posts:not(.is-grid) > li:first-child {
	margin-top: 0;
}

.wp-block-latest-posts:not(.is-grid) > li:last-child {
	margin-bottom: 0;
}

.wp-block-latest-posts.is-grid {
	word-wrap: break-word;
	word-break: break-word;
}

.wp-block-latest-posts.is-grid > li {
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-latest-posts.is-grid > li:last-child {
	margin-bottom: 0;
}

.wp-block-latest-posts.is-grid.columns-2 > li:nth-last-child(-n+2):nth-child(2n+1),
.wp-block-latest-posts.is-grid.columns-2 > li:nth-last-child(-n+2):nth-child(2n+1) ~ li,
.wp-block-latest-posts.is-grid.columns-3 > li:nth-last-child(-n+3):nth-child(3n+1),
.wp-block-latest-posts.is-grid.columns-3 > li:nth-last-child(-n+3):nth-child(3n+1) ~ li,
.wp-block-latest-posts.is-grid.columns-4 > li:nth-last-child(-n+4):nth-child(4n+1),
.wp-block-latest-posts.is-grid.columns-4 > li:nth-last-child(-n+4):nth-child(4n+1) ~ li,
.wp-block-latest-posts.is-grid.columns-5 > li:nth-last-child(-n+5):nth-child(5n+1),
.wp-block-latest-posts.is-grid.columns-5 > li:nth-last-child(-n+5):nth-child(5n+1) ~ li,
.wp-block-latest-posts.is-grid.columns-6 > li:nth-last-child(-n+6):nth-child(6n+1),
.wp-block-latest-posts.is-grid.columns-6 > li:nth-last-child(-n+6):nth-child(6n+1) ~ li {
	margin-bottom: 0;
}

.wp-block-latest-posts > li > * {
	margin-top: calc(0.333 * var(--global--spacing-vertical));
	margin-bottom: calc(0.333 * var(--global--spacing-vertical));
}

.wp-block-latest-posts > li > *:first-child {
	margin-top: 0;
}

.wp-block-latest-posts > li > *:last-child {
	margin-bottom: 0;
}

.wp-block-latest-posts > li > a {
	display: inline-block;
	font-family: var(--latest-posts--title-font-family);
	font-size: var(--latest-posts--title-font-size);
	font-weight: var(--heading--font-weight);
	line-height: var(--global--line-height-heading);
	margin-bottom: calc(0.333 * var(--global--spacing-vertical));
}

.wp-block-latest-posts .wp-block-latest-posts__post-author {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-md);
	line-height: var(--global--line-height-body);
}

.wp-block-latest-posts .wp-block-latest-posts__post-date {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	line-height: var(--global--line-height-body);
}

[class*=inner-container] .wp-block-latest-posts .wp-block-latest-posts__post-date,
.has-background .wp-block-latest-posts .wp-block-latest-posts__post-date {
	color: currentColor;
}

.wp-block-latest-posts .wp-block-latest-posts__post-excerpt,
.wp-block-latest-posts .wp-block-latest-posts__post-full-content {
	font-family: var(--latest-posts--description-font-family);
	font-size: var(--latest-posts--description-font-size);
	line-height: var(--global--line-height-body);
	margin-top: calc(0.666 * var(--global--spacing-vertical));
}

.wp-block-latest-posts.alignfull {
	padding-left: var(--global--spacing-unit);
	padding-right: var(--global--spacing-unit);
}

.entry-content [class*=inner-container] .wp-block-latest-posts.alignfull,
.entry-content .has-background .wp-block-latest-posts.alignfull {
	padding-left: 0;
	padding-right: 0;
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers {
	border-top: calc(3 * var(--separator--height)) solid var(--global--color-border);
	border-bottom: calc(3 * var(--separator--height)) solid var(--global--color-border);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers:not(.is-grid) > li,
.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers > li {
	padding-bottom: var(--global--spacing-vertical);
	border-bottom: var(--separator--height) solid var(--global--color-border);
	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers:not(.is-grid) > li:last-child,
.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers > li:last-child {
	padding-bottom: 0;
	border-bottom: none;
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid {
	box-shadow: inset 0 -1px 0 0 var(--global--color-border);
	border-bottom: calc(2 * var(--separator--height)) solid var(--global--color-border);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid li {
	margin: 0;
	padding-top: var(--global--spacing-vertical);
	padding-right: var(--global--spacing-horizontal);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid li:last-child {
	padding-bottom: var(--global--spacing-vertical);
}
@media screen and (min-width: 600px) {

	.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid.columns-2 li {
		width: calc((100% / 2));
	}

	.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid.columns-3 li {
		width: calc((100% / 3));
	}

	.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid.columns-4 li {
		width: calc((100% / 4));
	}

	.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid.columns-5 li {
		width: calc((100% / 5));
	}

	.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-dividers.is-grid.columns-6 li {
		width: calc((100% / 6));
	}
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-borders li {
	border: calc(3 * var(--separator--height)) solid var(--global--color-border);
	padding: var(--global--spacing-vertical) var(--global--spacing-horizontal);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-borders li:last-child {
	padding-bottom: var(--global--spacing-vertical);
}

.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-borders:not(.is-grid) li {
	margin-top: var(--global--spacing-horizontal);
	margin-bottom: var(--global--spacing-horizontal);
}

.gallery-item {
	display: inline-block;
	text-align: center;
	vertical-align: top;
	width: 100%;
}

.gallery-item a {
	display: block;
}

.gallery-item a:focus img {
	outline-offset: -2px;
}

.gallery-columns-2 .gallery-item {
	max-width: 50%;
}

.gallery-columns-3 .gallery-item {
	max-width: 33.33%;
}

.gallery-columns-4 .gallery-item {
	max-width: 25%;
}

.gallery-columns-5 .gallery-item {
	max-width: 20%;
}

.gallery-columns-6 .gallery-item {
	max-width: 16.66%;
}

.gallery-columns-7 .gallery-item {
	max-width: 14.28%;
}

.gallery-columns-8 .gallery-item {
	max-width: 12.5%;
}

.gallery-columns-9 .gallery-item {
	max-width: 11.11%;
}

.gallery-caption {
	display: block;
}

figure.wp-caption a:focus img {
	outline-offset: 2px;
}
.wp-block-image figure img {
    margin: 0 auto;
}

ul.aligncenter,
ol.aligncenter {
	list-style-position: inside;
	padding: 0;
}

ul.alignright,
ol.alignright {
	list-style-position: inside;
	text-align: right;
	padding: 0;
}

src/components/layout/styles.js
.wp-block-media-text {

}

.wp-block-media-text.alignfull {
	margin-top: 0;
	margin-bottom: 0;
}

.wp-block-media-text a:focus img {
	outline-offset: -1px;
}

.wp-block-media-text .wp-block-media-text__content {
	padding: var(--global--spacing-horizontal);
}
@media only screen and (min-width: 592px) {

	.wp-block-media-text .wp-block-media-text__content {
		padding: var(--global--spacing-vertical);
	}
}

.wp-block-media-text .wp-block-media-text__content > * {
	margin-top: calc(0.666 * var(--global--spacing-vertical));
	margin-bottom: calc(0.666 * var(--global--spacing-vertical));
}
@media only screen and (min-width: 482px) {

	.wp-block-media-text .wp-block-media-text__content > * {
		margin-top: var(--global--spacing-vertical);
		margin-bottom: var(--global--spacing-vertical);
	}
}

.wp-block-media-text .wp-block-media-text__content > *:first-child {
	margin-top: 0;
}

.wp-block-media-text .wp-block-media-text__content > *:last-child {
	margin-bottom: 0;
}
@media only screen and (min-width: 482px) {

	.wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__content {
		padding-top: var(--global--spacing-vertical);
		padding-bottom: var(--global--spacing-vertical);
	}
}

.wp-block-media-text.is-style-twentytwentyone-border {
	border: calc(3 * var(--separator--height)) solid var(--global--color-border);
}

.wp-block-navigation .wp-block-navigation-link {
	padding: 0;
}

.wp-block-navigation .wp-block-navigation-link .wp-block-navigation-link__content {
	padding: var(--primary-nav--padding);
}

.wp-block-navigation .wp-block-navigation-link .wp-block-navigation-link__label {
	font-family: var(--primary-nav--font-family);
	font-size: var(--primary-nav--font-size);
	font-weight: var(--primary-nav--font-weight);
}

.wp-block-navigation .wp-block-navigation-link__submenu-icon {
	padding: 0;
}

.wp-block-navigation > .wp-block-navigation__container .has-child .wp-block-navigation-link {
	display: inherit;
}

.wp-block-navigation > .wp-block-navigation__container .has-child .wp-block-navigation__container {
	border: none;
	left: 0;
	margin-left: var(--primary-nav--padding);
	min-width: max-content;
	opacity: 0;
	padding: 0;
	position: inherit;
	top: inherit;
}

.wp-block-navigation > .wp-block-navigation__container .has-child .wp-block-navigation__container .wp-block-navigation-link .wp-block-navigation-link__content {
	display: inline-block;
	padding: calc(0.5 * var(--primary-nav--padding)) var(--primary-nav--padding);
}

.wp-block-navigation > .wp-block-navigation__container .has-child .wp-block-navigation__container .wp-block-navigation-link__submenu-icon {
	display: none;
}

.wp-block-navigation > .wp-block-navigation__container .has-child:hover .wp-block-navigation__container,
.wp-block-navigation > .wp-block-navigation__container .has-child:focus-within .wp-block-navigation__container {
	display: block;
	opacity: 1;
	visibility: visible;
}

.wp-block-navigation > .wp-block-navigation__container > .has-child > .wp-block-navigation__container {
	background: var(--global--color-background);
	margin: 0;
	padding: 0;
	position: absolute;
	top: 100%;
	border: 1px solid var(--primary-nav--border-color);
}

.wp-block-navigation > .wp-block-navigation__container > .has-child > .wp-block-navigation__container:before,
.wp-block-navigation > .wp-block-navigation__container > .has-child > .wp-block-navigation__container:after {
	content: "";
	display: block;
	position: absolute;
	width: 0;
	top: -10px;
	left: var(--global--spacing-horizontal);
	border-style: solid;
	border-color: var(--primary-nav--border-color) transparent;
	border-width: 0 7px 10px 7px;
}

.wp-block-navigation > .wp-block-navigation__container > .has-child > .wp-block-navigation__container:after {
	top: -9px;
	border-color: var(--global--color-background) transparent;
}

.wp-block-navigation:not(.has-background) .wp-block-navigation__container {
	background: var(--global--color-background);
}

.wp-block-navigation:not(.has-background) .wp-block-navigation__container .wp-block-navigation__container {
	background: var(--global--color-background);
}

.wp-block-navigation:not(.has-text-color) .wp-block-navigation-link > a:hover,
.wp-block-navigation:not(.has-text-color) .wp-block-navigation-link > a:focus {
	color: var(--primary-nav--color-link-hover);
}

.wp-block-navigation:not(.has-text-color) .wp-block-navigation-link > a:hover {
	text-decoration: underline;
	text-decoration-style: dotted;
}

.wp-block-navigation:not(.has-text-color) .wp-block-navigation-link__content {
	color: currentColor;
}


p.has-background {
	padding: var(--global--spacing-unit);
}

p.has-text-color a {
	color: var(--wp--style--color--link, var(--global--color-primary));
}

pre.wp-block-preformatted {
	overflow-x: auto;
	white-space: pre;
}

.wp-block-pullquote {
	padding: calc(2 * var(--global--spacing-unit)) 0;
	text-align: center;
	border-width: var(--pullquote--border-width);
	border-bottom-style: solid;
	border-top-style: solid;
	color: currentColor;
	border-color: currentColor;
	position: relative;
}

.wp-block-pullquote blockquote::before {
	color: currentColor;
	content: "“";
	display: block;
	position: relative;
	left: 0;
	font-size: 3rem;
	font-weight: 500;
	line-height: 1;
}

.wp-block-pullquote p {
	font-family: var(--pullquote--font-family);
	font-size: var(--pullquote--font-size);
	font-style: var(--pullquote--font-style);
	font-weight: 700;
	letter-spacing: var(--pullquote--letter-spacing);
	line-height: var(--pullquote--line-height);
	margin: 0;
}

.wp-block-pullquote a {
	color: currentColor;
}

.wp-block-pullquote .wp-block-pullquote__citation,
.wp-block-pullquote cite,
.wp-block-pullquote footer {
	color: currentColor;
	display: block;
	font-size: var(--global--font-size-xs);
	font-style: var(--pullquote--font-style);
	text-transform: none;
}

.wp-block-pullquote:not(.is-style-solid-color) {
	background: none;
}

.wp-block-pullquote.alignleft:not(.is-style-solid-color) blockquote:before,
.wp-block-pullquote.alignleft:not(.is-style-solid-color) cite {
	text-align: center;
}

.wp-block-pullquote.alignwide > p,
.wp-block-pullquote.alignwide blockquote {
	max-width: var(--responsive--alignwide-width);
}

.wp-block-pullquote.alignfull:not(.is-style-solid-color) > p,
.wp-block-pullquote.alignfull:not(.is-style-solid-color) blockquote {
	padding: 0 calc(2 * var(--global--spacing-unit));
}

.wp-block-pullquote.is-style-solid-color {
	color: var(--pullquote--color-foreground);
	padding: calc(2.5 * var(--global--spacing-unit));
	border-width: var(--pullquote--border-width);
	border-style: solid;
	border-color: var(--pullquote--border-color);
}
@media (min-width: 600px) {

	.wp-block-pullquote.is-style-solid-color {
		padding: calc(5 * var(--global--spacing-unit));
	}
}

.wp-block-pullquote.is-style-solid-color blockquote::before {
	text-align: left;
}

.wp-block-pullquote.is-style-solid-color blockquote {
	margin: 0;
	max-width: inherit;
}

.wp-block-pullquote.is-style-solid-color blockquote p {
	font-size: var(--pullquote--font-size);
}

.wp-block-pullquote.is-style-solid-color .wp-block-pullquote__citation,
.wp-block-pullquote.is-style-solid-color cite,
.wp-block-pullquote.is-style-solid-color footer {
	color: currentColor;
}

.wp-block-pullquote.is-style-solid-color.alignleft,
.wp-block-pullquote.is-style-solid-color.alignright {
	padding: var(--global--spacing-unit);
}

.wp-block-pullquote.is-style-solid-color.alignleft blockquote,
.wp-block-pullquote.is-style-solid-color.alignright blockquote {
	max-width: initial;
}

.wp-block-quote {
	border-left: none;
}

.wp-block-quote:before {
	content: "“";
	font-size: var(--quote--font-size);
	line-height: var(--quote--line-height);
	left: 8px;
}

.has-background .wp-block-quote .wp-block-quote__citation,
[class*=background-color] .wp-block-quote .wp-block-quote__citation,
[style*=background-color] .wp-block-quote .wp-block-quote__citation,
.wp-block-cover[style*=background-image] .wp-block-quote .wp-block-quote__citation,
.has-background .wp-block-quote cite,
[class*=background-color] .wp-block-quote cite,
[style*=background-color] .wp-block-quote cite,
.wp-block-cover[style*=background-image] .wp-block-quote cite,
.has-background .wp-block-quote footer,
[class*=background-color] .wp-block-quote footer,
[style*=background-color] .wp-block-quote footer,
.wp-block-cover[style*=background-image] .wp-block-quote footer {
	color: currentColor;
}

.wp-block-quote.has-text-align-right {
	margin: var(--global--spacing-vertical) var(--global--spacing-horizontal) var(--global--spacing-vertical) auto;
	padding-right: 0;
	border-right: none;
}

.wp-block-quote.has-text-align-right:before {
	display: none;
}

.wp-block-quote.has-text-align-right p:before {
	content: "”";
	font-size: var(--quote--font-size);
	font-weight: normal;
	line-height: var(--quote--line-height);
	margin-right: 5px;
}

.wp-block-quote.has-text-align-center {
	margin: var(--global--spacing-vertical) auto;
}

.wp-block-quote.has-text-align-center:before {
	display: none;
}

.wp-block-quote.is-large,
.wp-block-quote.is-style-large {
	padding-left: 0;
	padding-right: 0;

	margin-top: var(--global--spacing-vertical);
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-quote.is-large p,
.wp-block-quote.is-style-large p {
	font-size: var(--quote--font-size-large);
	font-style: var(--quote--font-style-large);
	line-height: var(--quote--line-height-large);
}

.wp-block-quote.is-large:before,
.wp-block-quote.is-style-large:before {
	font-size: var(--quote--font-size-large);
	line-height: var(--quote--line-height-large);
	left: calc(-1 * var(--global--spacing-horizontal));
}

.wp-block-quote.is-large.has-text-align-right:before,
.wp-block-quote.is-style-large.has-text-align-right:before {
	display: none;
}

.wp-block-quote.is-large.has-text-align-right p:before,
.wp-block-quote.is-style-large.has-text-align-right p:before {
	content: "”";
	font-size: var(--quote--font-size-large);
	font-weight: normal;
	line-height: var(--quote--line-height-large);
	margin-right: 10px;
}

.wp-block-quote.is-large .wp-block-quote__citation,
.wp-block-quote.is-large cite,
.wp-block-quote.is-large footer,
.wp-block-quote.is-style-large .wp-block-quote__citation,
.wp-block-quote.is-style-large cite,
.wp-block-quote.is-style-large footer {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-sm);
}
@media only screen and (max-width: 481px) {

	.wp-block-quote.is-large,
	.wp-block-quote.is-style-large {
		padding-left: var(--global--spacing-horizontal);
	}

	.wp-block-quote.is-large:before,
	.wp-block-quote.is-style-large:before {
		left: 0;
	}

	.wp-block-quote.is-large.has-text-align-right,
	.wp-block-quote.is-style-large.has-text-align-right {
		padding-left: 0;
		padding-right: var(--global--spacing-horizontal);
	}

	.wp-block-quote.is-large.has-text-align-right:before,
	.wp-block-quote.is-style-large.has-text-align-right:before {
		right: 0;
	}

	.wp-block-quote.is-large.has-text-align-center,
	.wp-block-quote.is-style-large.has-text-align-center {
		padding-left: 0;
		padding-right: 0;
	}
}
@media only screen and (max-width: 481px) {

	.wp-block-quote.has-text-align-right {
		padding-left: 0;
		padding-right: calc(0.5 * var(--global--spacing-horizontal));
	}

	.wp-block-quote.has-text-align-right:before {
		right: 0;
	}

	.wp-block-quote.has-text-align-center {
		padding-left: 0;
		padding-right: 0;
	}
}

.wp-block-rss {
	padding-left: 0;
}

.wp-block-rss > li {
	list-style: none;
}

.wp-block-rss:not(.is-grid) > li {
	margin-top: calc(1.666 * var(--global--spacing-vertical));
	margin-bottom: calc(1.666 * var(--global--spacing-vertical));
}

.wp-block-rss:not(.is-grid) > li:first-child {
	margin-top: 0;
}

.wp-block-rss:not(.is-grid) > li:last-child {
	margin-bottom: 0;
}

.wp-block-rss.is-grid > li {
	margin-bottom: var(--global--spacing-vertical);
}

.wp-block-rss.is-grid > li:last-child {
	margin-bottom: 0;
}

.wp-block-rss.is-grid.columns-2 > li:nth-last-child(-n+2):nth-child(2n+1),
.wp-block-rss.is-grid.columns-2 > li:nth-last-child(-n+2):nth-child(2n+1) ~ li,
.wp-block-rss.is-grid.columns-3 > li:nth-last-child(-n+3):nth-child(3n+1),
.wp-block-rss.is-grid.columns-3 > li:nth-last-child(-n+3):nth-child(3n+1) ~ li,
.wp-block-rss.is-grid.columns-4 > li:nth-last-child(-n+4):nth-child(4n+1),
.wp-block-rss.is-grid.columns-4 > li:nth-last-child(-n+4):nth-child(4n+1) ~ li,
.wp-block-rss.is-grid.columns-5 > li:nth-last-child(-n+5):nth-child(5n+1),
.wp-block-rss.is-grid.columns-5 > li:nth-last-child(-n+5):nth-child(5n+1) ~ li,
.wp-block-rss.is-grid.columns-6 > li:nth-last-child(-n+6):nth-child(6n+1),
.wp-block-rss.is-grid.columns-6 > li:nth-last-child(-n+6):nth-child(6n+1) ~ li {
	margin-bottom: 0;
}

.wp-block-rss > li > * {
	margin-top: calc(0.333 * var(--global--spacing-vertical));
	margin-bottom: calc(0.333 * var(--global--spacing-vertical));
}

.wp-block-rss > li > *:first-child {
	margin-top: 0;
}

.wp-block-rss > li > *:last-child {
	margin-bottom: 0;
}

.wp-block-rss .wp-block-rss__item-title > a {
	display: inline-block;
	font-family: var(--latest-posts--title-font-family);
	font-size: var(--latest-posts--title-font-size);
	font-weight: var(--heading--font-weight);
	line-height: var(--global--line-height-heading);
	margin-bottom: calc(0.333 * var(--global--spacing-vertical));
}

.wp-block-rss .wp-block-rss__item-author {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-md);
	line-height: var(--global--line-height-body);
}

.wp-block-rss .wp-block-rss__item-publish-date {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	line-height: var(--global--line-height-body);
}

[class*=inner-container] .wp-block-rss .wp-block-rss__item-publish-date,
.has-background .wp-block-rss .wp-block-rss__item-publish-date {
	color: currentColor;
}

.wp-block-rss .wp-block-rss__item-excerpt,
.wp-block-rss .wp-block-rss__item-full-content {
	font-family: var(--latest-posts--description-font-family);
	font-size: var(--latest-posts--description-font-size);
	line-height: var(--global--line-height-body);
	margin-top: calc(0.666 * var(--global--spacing-vertical));
}

.wp-block-rss.alignfull {
	padding-left: var(--global--spacing-unit);
	padding-right: var(--global--spacing-unit);
}

.entry-content [class*=inner-container] .wp-block-rss.alignfull,
.entry-content .has-background .wp-block-rss.alignfull {
	padding-left: 0;
	padding-right: 0;
}

.wp-block-search {
	max-width: var(--responsive--aligndefault-width);
}

.wp-block-search__button-only.aligncenter .wp-block-search__inside-wrapper {
	justify-content: center;
}

.wp-block-search .wp-block-search__label {
	font-size: var(--form--font-size);
	font-weight: var(--form--label-weight);
	margin-bottom: calc(var(--global--spacing-vertical) / 3);
}

.wp-block-search .wp-block-search__input {
	border: var(--form--border-width) solid var(--form--border-color);
	border-radius: var(--form--border-radius);
	color: var(--form--color-text);
	line-height: var(--form--line-height);
	max-width: inherit;
	margin-right: calc(-1 * var(--button--border-width));
	padding: var(--form--spacing-unit);
}

.wp-block-search .wp-block-search__input:focus {
	color: var(--form--color-text);
	border-color: var(--form--border-color);
}

.has-background .wp-block-search .wp-block-search__input,
[class*=background-color] .wp-block-search .wp-block-search__input,
[style*=background-color] .wp-block-search .wp-block-search__input,
.wp-block-cover[style*=background-image] .wp-block-search .wp-block-search__input {
	border-color: currentColor;
}

.has-background.has-gray-background-color .wp-block-search .wp-block-search__input,
.has-background.has-dark-gray-background-color .wp-block-search .wp-block-search__input,
.has-background.has-black-background-color .wp-block-search .wp-block-search__input {
	border-color: var(--global--color-white);
}

.wp-block-search button.wp-block-search__button {
	margin-left: 0;
	background-color: transparent;
	color: var(--button--color-text-hover);
	line-height: 1;
}

.wp-block-search button.wp-block-search__button:hover {
	background-color: var(--button--color-background);
	color: var(--button--color-text);
}

.wp-block-search button.wp-block-search__button.has-icon {
	padding: 6px calc(0.5 * var(--button--padding-horizontal));
}

.wp-block-search button.wp-block-search__button.has-icon svg {
	width: 40px;
	height: 40px;
	fill: currentColor;
}

.has-background.has-gray-background-color .wp-block-search button.wp-block-search__button,
.has-background.has-dark-gray-background-color .wp-block-search button.wp-block-search__button,
.has-background.has-black-background-color .wp-block-search button.wp-block-search__button {
	color: var(--global--color-white);
	border-color: currentColor;
}

.has-background.has-gray-background-color .wp-block-search button.wp-block-search__button:hover,
.has-background.has-dark-gray-background-color .wp-block-search button.wp-block-search__button:hover,
.has-background.has-black-background-color .wp-block-search button.wp-block-search__button:hover {
	background-color: var(--button--color-background);
	border-color: var(--global--color-white);
	color: var(--global--color-white);
}

.is-dark-theme .has-background.has-gray-background-color .wp-block-search button.wp-block-search__button:hover,
.is-dark-theme .has-background.has-dark-gray-background-color .wp-block-search button.wp-block-search__button:hover,
.is-dark-theme .has-background.has-black-background-color .wp-block-search button.wp-block-search__button:hover {
	color: var(--button--color-text);
}

.has-background.has-white-background-color .wp-block-search button.wp-block-search__button,
.has-background.has-green-background-color .wp-block-search button.wp-block-search__button,
.has-background.has-blue-background-color .wp-block-search button.wp-block-search__button,
.has-background.has-purple-background-color .wp-block-search button.wp-block-search__button,
.has-background.has-red-background-color .wp-block-search button.wp-block-search__button,
.has-background.has-orange-background-color .wp-block-search button.wp-block-search__button,
.has-background.has-yellow-background-color .wp-block-search button.wp-block-search__button {
	border-color: currentColor;
	color: currentColor;
}

.has-background.has-white-background-color .wp-block-search button.wp-block-search__button:hover,
.has-background.has-green-background-color .wp-block-search button.wp-block-search__button:hover,
.has-background.has-blue-background-color .wp-block-search button.wp-block-search__button:hover,
.has-background.has-purple-background-color .wp-block-search button.wp-block-search__button:hover,
.has-background.has-red-background-color .wp-block-search button.wp-block-search__button:hover,
.has-background.has-orange-background-color .wp-block-search button.wp-block-search__button:hover,
.has-background.has-yellow-background-color .wp-block-search button.wp-block-search__button:hover {
	background-color: var(--form--border-color);
	border-color: var(--form--border-color);
	color: var(--global--color-white);
}

.is-dark-theme .has-background.has-white-background-color .wp-block-search button.wp-block-search__button:hover,
.is-dark-theme .has-background.has-green-background-color .wp-block-search button.wp-block-search__button:hover,
.is-dark-theme .has-background.has-blue-background-color .wp-block-search button.wp-block-search__button:hover,
.is-dark-theme .has-background.has-purple-background-color .wp-block-search button.wp-block-search__button:hover,
.is-dark-theme .has-background.has-red-background-color .wp-block-search button.wp-block-search__button:hover,
.is-dark-theme .has-background.has-orange-background-color .wp-block-search button.wp-block-search__button:hover,
.is-dark-theme .has-background.has-yellow-background-color .wp-block-search button.wp-block-search__button:hover {
	border-color: var(--button--color-text);
	background-color: var(--button--color-text);
	color: var(--button--color-background);
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper {
	background-color: var(--global--color-white);
	border: var(--form--border-width) solid var(--form--border-color);
	border-radius: var(--form--border-radius);
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input {
	margin-right: 0;
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input:focus {
	outline: 2px dotted var(--form--border-color);
	outline-offset: -5px;
}

.is-dark-theme .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input:focus {
	outline-color: currentColor;
}

.wp-block-search.wp-block-search__button-inside.wp-block-search__text-button button.wp-block-search__button {
	padding: var(--button--padding-vertical) var(--button--padding-horizontal);
}

.has-background.has-gray-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button,
.has-background.has-dark-gray-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button,
.has-background.has-black-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button {
	border-color: var(--button--color-background);
	color: var(--button--color-background);
}

.has-background.has-gray-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button:hover,
.has-background.has-dark-gray-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button:hover,
.has-background.has-black-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button:hover {
	color: var(--global--color-white);
}

.is-dark-theme .has-background.has-gray-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button,
.is-dark-theme .has-background.has-dark-gray-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button,
.is-dark-theme .has-background.has-black-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button {
	border-color: var(--button--color-text);
	color: var(--button--color-text);
}

.is-dark-theme .has-background.has-gray-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button:hover,
.is-dark-theme .has-background.has-dark-gray-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button:hover,
.is-dark-theme .has-background.has-black-background-color .wp-block-search.wp-block-search__button-inside button.wp-block-search__button:hover {
	color: var(--global--color-white);
}

.is-dark-theme .wp-block-search.wp-block-search__button-inside button.wp-block-search__button {
	border-color: var(--button--color-text);
	color: var(--button--color-text);
}

.is-dark-theme .wp-block-search.wp-block-search__button-inside button.wp-block-search__button:hover {
	border-color: var(--button--color-text);
	background-color: var(--button--color-text);
	color: var(--button--color-background);
}

.wp-block-search__button {
	box-shadow: none;
}

hr {
	border-style: none;
	border-bottom: var(--separator--height) solid var(--separator--border-color);
	clear: both;
	margin-left: auto;
	margin-right: auto;
}

hr.wp-block-separator {
	border-bottom: var(--separator--height) solid var(--separator--border-color);
	opacity: 1;
}

hr.wp-block-separator:not(.is-style-dots):not(.alignwide) {
	max-width: var(--responsive--aligndefault-width);
}

hr.wp-block-separator:not(.is-style-dots).alignwide {
	max-width: var(--responsive--alignwide-width);
}

hr.wp-block-separator:not(.is-style-dots).alignfull {
	max-width: var(--responsive--alignfull-width);
}

hr.wp-block-separator.is-style-twentytwentyone-separator-thick {
	border-bottom-width: calc(3 * var(--separator--height));
}

hr.wp-block-separator.is-style-dots.has-background,
hr.wp-block-separator.is-style-dots.has-text-color {
	background-color: transparent !important;
}

hr.wp-block-separator.is-style-dots.has-background:before,
hr.wp-block-separator.is-style-dots.has-text-color:before {
	color: currentColor !important;
}

hr.wp-block-separator.is-style-dots:before {
	color: var(--separator--border-color);
	font-size: var(--global--font-size-xl);
	letter-spacing: var(--global--font-size-sm);
	padding-left: var(--global--font-size-sm);
}

.has-background hr.wp-block-separator,
[class*=background-color] hr.wp-block-separator,
[style*=background-color] hr.wp-block-separator,
.wp-block-cover[style*=background-image] hr.wp-block-separator {
	border-color: currentColor;
}

.wp-block-social-links a:focus {
	color: var(--global--color-primary);
}

.wp-block-social-links.is-style-twentytwentyone-social-icons-color a {
	color: var(--global--color-primary);
}

.wp-block-social-links.is-style-twentytwentyone-social-icons-color .wp-social-link {
	background: none;
}

.wp-block-spacer {
	display: block;
	margin-bottom: 0 !important;
	margin-top: 0 !important;
}
@media only screen and (max-width: 481px) {

	.wp-block-spacer[style] {
		height: var(--global--spacing-unit) !important;
	}
}


table,
.wp-block-table {
	width: 100%;
	min-width: 240px;
	border-collapse: collapse;
}

table thead,
table tfoot,
.wp-block-table thead,
.wp-block-table tfoot {
	text-align: center;
}

table th,
.wp-block-table th {
	font-family: var(--heading--font-family);
}

table td,
table th,
.wp-block-table td,
.wp-block-table th {
	padding: calc(0.5 * var(--global--spacing-unit));
	border: 1px solid;
}

table figcaption,
.wp-block-table figcaption {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
}

table.is-style-regular .has-background,
table.is-style-stripes .has-background,
table.is-style-stripes .has-background thead tr,
table.is-style-stripes .has-background tfoot tr,
table.is-style-stripes .has-background tbody tr,
.wp-block-table.is-style-regular .has-background,
.wp-block-table.is-style-stripes .has-background,
.wp-block-table.is-style-stripes .has-background thead tr,
.wp-block-table.is-style-stripes .has-background tfoot tr,
.wp-block-table.is-style-stripes .has-background tbody tr {
	color: var(--table--has-background-text-color);
}

table.is-style-stripes,
.wp-block-table.is-style-stripes {
	border-color: var(--table--stripes-border-color);
}

table.is-style-stripes th,
table.is-style-stripes td,
.wp-block-table.is-style-stripes th,
.wp-block-table.is-style-stripes td {
	border-width: 0;
}

table.is-style-stripes tbody tr:nth-child(odd),
.wp-block-table.is-style-stripes tbody tr:nth-child(odd) {
	background-color: var(--table--stripes-background-color);
}

table.is-style-stripes .has-background tbody tr:nth-child(odd),
.wp-block-table.is-style-stripes .has-background tbody tr:nth-child(odd) {
	background-color: var(--global--color-white-90);
}

table.wp-calendar-table td,
table.wp-calendar-table th {
	background: transparent;
	border: 0;
	text-align: center;
	line-height: 2;
	vertical-align: middle;
	word-break: normal;
}

table.wp-calendar-table th {
	font-weight: bold;
}

table.wp-calendar-table thead,
table.wp-calendar-table tbody {
	color: currentColor;
	border: 1px solid;
}

table.wp-calendar-table caption {
	font-weight: bold;
	text-align: left;
	margin-bottom: var(--global--spacing-unit);
	color: currentColor;
}

.wp-calendar-nav {
	text-align: left;
	margin-top: calc(var(--global--spacing-unit) / 2);
}

.wp-calendar-nav svg {
	height: 1em;
	vertical-align: middle;
}

.wp-calendar-nav svg path {
	fill: currentColor;
}

.wp-calendar-nav .wp-calendar-nav-next {
	float: right;
}

.wp-block-tag-cloud.alignfull {
	padding-left: var(--global--spacing-unit);
	padding-right: var(--global--spacing-unit);
}

.wp-block-verse {
	font-family: var(--entry-content--font-family);
}

.wp-block-video figcaption {
	color: var(--global--color-primary);
	font-size: var(--global--font-size-xs);
	margin-top: calc(0.5 * var(--global--spacing-unit));
	margin-bottom: var(--global--spacing-unit);
	text-align: center;
}

* > figure > video {
	max-width: unset;
	width: 100%;
	vertical-align: middle;
}

:root .is-extra-small-text,
:root .has-extra-small-font-size {
	font-size: var(--global--font-size-xs);
}

:root .is-small-text,
:root .has-small-font-size {
	font-size: var(--global--font-size-sm);
}

:root .is-regular-text,
:root .has-regular-font-size,
:root .is-normal-font-size,
:root .has-normal-font-size,
:root .has-medium-font-size {
	font-size: var(--global--font-size-base);
}

:root .is-large-text,
:root .has-large-font-size {
	font-size: var(--global--font-size-lg);
	line-height: var(--global--line-height-heading);
}

:root .is-larger-text,
:root .has-larger-font-size,
:root .is-extra-large-text,
:root .has-extra-large-font-size {
	font-size: var(--global--font-size-xl);
	line-height: var(--global--line-height-heading);
}

:root .is-huge-text,
:root .has-huge-font-size {
	font-size: var(--global--font-size-xxl);
	line-height: var(--global--line-height-heading);
	font-weight: var(--heading--font-weight-page-title);
}

:root .is-gigantic-text,
:root .has-gigantic-font-size {
	font-size: var(--global--font-size-xxxl);
	line-height: var(--global--line-height-heading);
	font-weight: var(--heading--font-weight-page-title);
}


.alignleft {

	text-align: left;
	margin-top: 0;
}

.entry-content > .alignleft {
	max-width: var(--responsive--aligndefault-width);
}

@media only screen and (min-width: 482px) {

	.alignleft {

		/*rtl:ignore*/
		float: left;

		/*rtl:ignore*/
		margin-right: var(--global--spacing-horizontal);
		margin-bottom: var(--global--spacing-vertical);
	}

	.entry-content > .alignleft {
		max-width: calc(50% - var(--responsive--alignleft-margin));
	}
}


.aligncenter {
	clear: both;
	display: block;
	float: none;
	margin-right: auto;
	margin-left: auto;
	text-align: center;
}


.alignright {
	margin-top: 0;
	margin-bottom: var(--global--spacing-vertical);
}

.entry-content > .alignright {
	max-width: var(--responsive--aligndefault-width);
}

@media only screen and (min-width: 482px) {

	.alignright {

		float: right;

		margin-left: var(--global--spacing-horizontal);
	}

	.entry-content > .alignright {
		max-width: calc(50% - var(--responsive--alignright-margin));
	}
}

[class*=inner-container] > .alignleft + *,
[class*=inner-container] > .alignright + * {
	margin-top: 0;
}

.alignwide {
	clear: both;
}


.alignfull {
	clear: both;
}

.has-left-content {
	justify-content: flex-start;
}

.has-right-content {
	justify-content: flex-end;
}

.has-parallax {
	background-attachment: fixed;
}

.has-drop-cap:not(:focus)::first-letter {
	font-family: var(--heading--font-family);
	font-weight: var(--heading--font-weight);
	line-height: 0.66;
	text-transform: uppercase;
	font-style: normal;
	float: left;
	margin: 0.1em 0.1em 0 0;
	font-size: calc(1.2 * var(--heading--font-size-h1));
}

.has-drop-cap:not(:focus)::after {
	content: "";
	display: table;
	clear: both;
	padding-top: 14px;
}

.desktop-only {
	display: none;
}
@media only screen and (min-width: 482px) {

	.desktop-only {
		display: block;
	}
}



.single .site-main > article > .entry-footer {
	margin-top: calc(3.4 * var(--global--spacing-vertical));
	margin-bottom: calc(3.4 * var(--global--spacing-vertical));
	padding-bottom: 0;
	padding-top: calc(0.8 * var(--global--spacing-vertical));
	border-top: 3px solid var(--separator--border-color);
	border-bottom: var(--separator--height) solid transparent;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: calc(2 * var(--global--spacing-horizontal));
}

.single .site-main > article > .entry-footer .post-taxonomies,
.single .site-main > article > .entry-footer .full-size-link {
	justify-content: flex-end;
	text-align: right;
}

.single .site-main > article > .entry-footer .full-size-link:first-child:last-child {
	grid-column: span 2;
}

.single .site-main > article > .entry-footer .posted-on,
.single .site-main > article > .entry-footer .byline,
.single .site-main > article > .entry-footer .cat-links,
.single .site-main > article > .entry-footer .tags-links {
	display: block;
}
@media only screen and (max-width: 481px) {

	.single .site-main > article > .entry-footer {
		display: block;
	}

	.single .site-main > article > .entry-footer .full-size-link {
		display: block;
	}

	.single .site-main > article > .entry-footer .post-taxonomies,
	.single .site-main > article > .entry-footer .full-size-link {
		text-align: left;
	}
}

.post-thumbnail {
	text-align: center;
}
.post-thumbnail .wp-post-image {
	display: block;
	width: auto;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
	margin-top: calc(2 * var(--global--spacing-vertical));
}

.author-bio {
	position: relative;
	font-size: var(--global--font-size-xs);
	max-width: var(--responsive--aligndefault-width);
}

.site-main > article > .author-bio {
	margin-top: calc(2 * var(--global--spacing-vertical));
}

.author-bio.show-avatars .avatar {
	display: inline-block;
	vertical-align: top;
	border-radius: 50%;
}

.author-bio.show-avatars .author-bio-content {
	display: inline-block;
	padding-left: var(--global--spacing-horizontal);
	max-width: calc(var(--responsive--aligndefault-width) - 90px);
}

.author-bio .author-bio-content .author-title {
	font-family: var(--entry-author-bio--font-family);
	font-size: var(--entry-author-bio--font-size);
	display: inline;
}

.author-bio .author-bio-content .author-description {
	font-size: var(--global--font-size-xs);
	margin-top: calc(0.5 * var(--global--spacing-vertical));
	margin-bottom: calc(0.5 * var(--global--spacing-vertical));
}

.single .the-content ol,
.single .the-content ul:not(.social-share) {
    list-style: inherit;
    margin: inherit;
    margin-bottom: 20px;
    padding-left: 40px;
}
.single .the-content ol {
    list-style: decimal;
}
.single .the-content h3,
.single .the-content h2 {
    margin: 35px 0 15px 0;
}
.single .the-content h4 {
    margin: 10px 0 5px 0;
}

.single .the-content table {
    margin: 0 0 15px 0!important;
}





*,
::after,
::before {
    box-sizing: border-box
}
* {
    margin: 0px;
    padding: 0px;
}
*:focus {
    box-shadow: none;
    outline: none;
}
html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
    display: block
}
body, html {
    height: 100%;
    width: 100%;
   
}
body{
    overflow-x: hidden;
}
body, p {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
a {
    text-decoration: none;
    color: ${theme.colors.primaryColor};
}

h1, h2, h3, h4, h5, h6, p, figur, a {
    margin: 0px;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    -webkit-font-variant-ligatures: common-ligatures;
    font-variant-ligatures: common-ligatures;
}
img {
    vertical-align: middle;
    border-style: none;
    display: block;
    max-width: 100%;
}
a:hover,
a:focus,
input:focus,
button:focus,
a:active {
    text-decoration: none;
    outline: none;
    outline-offset: 0px;
    box-shadow: none;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
button{
    cursor: pointer;
}
input,
textarea,
select {
    border: 1px solid #e8e9ef;
    border-radius: 5px;
    height: 58px;
    background: #f4f6fb;
    color: #23252d;
    font-size: 18px;
    resize: none;
    width: 100%;
    padding: 10px 20px;
}
textarea{
    min-height: 150px;
    height: auto;
}

.cr-container,
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto
}
@media (min-width:576px) {
    .cr-container,
    .container {
        max-width: 540px
    }
}

@media (min-width:768px) {
    .cr-container,
    .container {
        max-width: 720px
    }
}

@media (min-width:992px) {
    .cr-container,
    .container {
        max-width: 960px
    }
}

@media (min-width:1200px) {
    .cr-container,
    .container {
        max-width: 1140px
    }
}

@media (min-width:1301px) {
    .cr-container {
        max-width: 1280px;
    }
}

@media (min-width:1501px) {
    .cr-container {
        max-width: 1430px;
    }
	.join-us .cr-container {
		max-width: 1330px;
	}
}

.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto
}
.cr-row {
    margin-right: -15px;
    margin-left: -15px;
}
.cr-col {
    position: relative;
    width: 100%;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

.primary-color {
	color: 
}


body, p {
    font-size: 20px;
    line-height: 34px;
    font-weight: 400;
    font-family: ${theme.fontFamily.bodyFont};
    color: ${theme.colors.bodyFontColor};
}

//---heading tag Typogrpahy---*/
h1 {
    font-size: calc(35px + (90 - 35) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1.1;
    letter-spacing: -4px;
    font-family: ${theme.fontFamily.circulerBold};
}
h2 {
    font-size: calc(30px + (70 - 30) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1.1;
    letter-spacing: -2px;
    font-family: ${theme.fontFamily.circulerBold};
}
h3 {
    font-size: calc(28px + (50 - 28) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1.1;
    letter-spacing: -1px;
    font-family: ${theme.fontFamily.circulerBold};
}
h4 {
    font-size: calc(26px + (40 - 26) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1.1;
    letter-spacing: -1px;
    font-family: ${theme.fontFamily.circulerMedium};
}
h5 {
    font-size: 30px;
    line-height: 40px;
    font-family: ${theme.fontFamily.circulerBold};
}
h6 {
    font-size: 20px;
    line-height: 30px;
    font-family: ${theme.fontFamily.circulerBold};
}

.title-26{
    font-size: 26px;
    line-height: 46px;
}

@media only screen and (min-width: 1921px){
    h1 {
        font-size: 90px;
    }
    h2 {
        font-size: 70px;
    }
    h3 {
        font-size: 50px;
    }
    h4 {
        font-size: 40px;
    }
}

@media only screen and (max-width: 1500px){
    h1 {
        letter-spacing: -2px;
    }
    h2 {
        letter-spacing: -1px;
    }
}

@media only screen and (max-width: 1300px){
    h2 {
        line-height: 1.2;
        letter-spacing:normal;
    }
}

.fw-300 {
    font-weight: 300;
}.fw-400 {
    font-weight: 400;
}.fw-500 {
    font-weight: 500;
}.fw-600 {
    font-weight: 600;
}.fw-700 {
    font-weight: 700;
}.fw-800 {
    font-weight: 800;
}.fw-900 {
    font-weight: 900;
}

.secondary-color,
.color-00b{
    color: #00b4ff;
}
.color-001{
    color: #00146b;
}
.color-232{
    color: #23252d;
}
.color-fff{
    color: #ffffff;
}
.color-393{
    color: #3939CD;
}

.circular-700 {
    font-family: ${theme.fontFamily.circulerBold};
}
.circular-500 {
    font-family: ${theme.fontFamily.circulerMedium};
}

//----------------
.section-padding {
    padding: 150px 0;
}
.pos-relative {
    position: relative;
}
.display-block {
    display: block;
}
.display-inline li {
    display: inline-block;
}
.text-center{
    text-align: center;
}
.text-left{
    text-align: left;
}
.text-right{
    text-align: right;
}
.text-uppercase{
    text-transform: uppercase;
}
.text-capitalize{
    text-transform: capitalize;
}

.cr-team .single-member .member-img .social-contact,
.cr-team .single-member .member-img .social-contact li,
.cr-work-procedure .procedure-content .single-process:before,
.comment-respond .comment-form input,
a,
.transition-3s {
    transition: all 0.3s ease;
}

.cr-work-procedure .procedure-content .single-process,
.cr-work-procedure .procedure-content .single-process .overlay-text,
.cr-work-procedure .procedure-content .process1 span,
.cr-work-procedure .procedure-content .process2 .parent2 .icon21.default,
.cr-work-procedure .procedure-content .process2 .parent2 .icon22.default,
.cr-work-procedure .procedure-content .process2 .parent2 .icon21.hover,
.cr-work-procedure .procedure-content .process2 .parent2 .icon22.hover,
.cr-work-procedure .procedure-content .process3 .parent3 span,
.cr-work-procedure .procedure-content .process4 .parent4 span,
.transition-5s {
    transition: all 0.5s ease;
}


button[type="submit"],
input[type="submit"],
.cr-btn-default {
    display: inline-block;
    height: 60px;
    line-height: 62px;
    padding: 0px 50px;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 50px;
    font-weight: 700;
    color: ${theme.colors.primaryColor};
    font-family: ${theme.fontFamily.circulerBold};
    position: relative;
    z-index: 1;
    cursor: pointer;
}

.svg-btn-effect {
    position: relative;
    display: inline-block; 
}
.svg-btn-effect svg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%; 
}
.svg-btn-effect svg rect {
    fill: none;
    stroke: #00b4ff;
    stroke-dasharray: 353, 0;
    stroke-width: 2px;
    stroke-dashoffset: 0;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease; 
}
.svg-btn-effect:hover svg rect {
    stroke-dasharray: 154, 537;
    stroke-dashoffset: 420; 
}
.svg-btn-effect.contact-btn:hover svg rect {
    stroke-dasharray: 115, 543; 
}
.svg-btn-effect.view-case-btn:hover svg rect {
    stroke-dasharray: 128,559; 
}
.svg-btn-effect.lets-talk-btn:hover svg rect {
    stroke-dasharray: 94,544;
    stroke-dashoffset: 410;
}
.svg-btn-effect.discuss-btn:hover svg rect {
    stroke-dashoffset: 396;
}
.svg-btn-effect.schedule-call:hover svg rect {
    stroke-dasharray: 139, 566;
}
.svg-btn-effect.talk-us-btn:hover svg rect {
    stroke-dasharray: 114, 497;
    stroke-dashoffset: 358;
}
.svg-btn-effect.let-us-talk-btn:hover svg rect {
    stroke-dasharray: 106,552;
}
.svg-btn-effect.know-more-btn:hover svg rect {
    stroke-dasharray: 163,571;
    stroke-dashoffset: 430;
}
.svg-btn-effect.view-service-btn:hover svg rect {
    stroke-dasharray: 115,572;
}
.svg-btn-effect.view-example-btn:hover svg rect {
    stroke-dasharray: 118,562;
}
.svg-btn-effect.join-us-btn:hover svg rect {
    stroke-dasharray: 69,556;
}

.overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}


.display-hide,
.cr-hero .hero-content h1,
.cr-hero .hero-content p,
.cr-hero .hero-content .svg-btn-effect,
.cr-hire .hire-content h2,
.cr-hire .hire-content p,
.cr-hire .hire-content .cr-btn-default,
.cr-work-procedure .procedure-content .single-process .overlay-text,
.cr-work-procedure .procedure-content .process2 .parent2 .icon21.hover,
.cr-work-procedure .procedure-content .process2 .parent2 .icon22.hover,
.cr-expectation .expectations .single-item,
.inner-page-banner .about-banner-img,
.inner-page-banner .banner-content h1,
.welcome-txt .welcome-content .content-wrapper h2,
.welcome-txt .welcome-content .content-wrapper .description,
.welcome-txt .welcome-content .content-wrapper .cr-btn-default,
.cr-cost .cost-content .single-cost h4,
.cr-cost .cost-content .single-cost p,
.cr-cost .cost-content .cost1 .icon img,
.cr-cost .cost-content .cost2 .circle-parent .circle-child3,
.cr-team .single-member .member-img .social-contact,
.cr-team .single-member .member-img .social-contact li,
.cr-provided-services .service-list h2,
.cr-provided-services .service-list ul,
.cr-testimonial .section-title,
.portfolio-banner .ipad-img .img1,
.portfolio-banner .ipad-img .img2,
.portfolio-banner .banner-content p,
.featured-portfolio .content-wrapper .content-area p,
.featured-portfolio .content-wrapper .content-area .cr-btn-default,
.service-banner .service-banner-img,
.service-welcome-txt .welcome-content .verticle-txt,
.service-welcome-txt .welcome-content p,
.service-welcome-txt .welcome-content .cr-btn-default,
.cr-service .service-1 .content-image .icon-wrapper img,
.cr-service .service-2 .content-image .icon-wrapper,
.cr-service .service-3 .content-image .icon-wrapper,
.cr-service .service-4 .content-image .icon-wrapper img,
.cr-service .service-5 .content-image .icon-wrapper img,
.cr-service .service-6 .content-image .icon-wrapper:before,
.cr-service .service-6 .content-image .icon-wrapper img,
.free-service .service-illustration1,
.free-service .service-illustration2,
.free-service .free-single-item h5,
.free-service .free-single-item p,
.case-study-banner .banner-content a img,
.case-study-banner .banner-content p,
.case-study-banner .banner-content a,
.case-details .key-point h4,
.case-details .about-project h4,
.case-details .about-project p,
.sample-page img,
.project-typography .typo-title h4,
.project-typography .project-font-family .single-font-family h5,
.project-typography .project-font-family .single-font-family ul,
.project-typography .project-color .color-title h4,
.responsive-device .device-mockup img {
    
}

.cr-team .single-member .member-img .social-contact,
.cr-team .single-member .member-img .social-contact li,
.cr-work-procedure .procedure-content .single-process .overlay-text,
.cr-work-procedure .procedure-content .process2 .parent2 .icon21.hover,
.cr-work-procedure .procedure-content .process2 .parent2 .icon22.hover {
    opacity: 0;
    visibility: hidden;
}

.display-show,
.cr-hero .hero-content h1.crx-animated,
.cr-hero .hero-content p.crx-animated,
.cr-hero .hero-content .svg-btn-effect.crx-animated,
.cr-hire .hire-content h2.crx-animated,
.cr-hire .hire-content p.crx-animated,
.cr-hire .hire-content .cr-btn-default.crx-animated,
.cr-work-procedure .procedure-content .single-process.active .overlay-text,
.cr-work-procedure .procedure-content .process2 .parent2 .icon21.default,
.cr-work-procedure .procedure-content .process2 .parent2 .icon22.default,
.cr-expectation .expectations .single-item.crx-animated,
.inner-page-banner .about-banner-img.crx-animated,
.inner-page-banner .banner-content h1.crx-animated,
.welcome-txt .welcome-content .content-wrapper h2.crx-animated,
.welcome-txt .welcome-content .content-wrapper .description.crx-animated,
.welcome-txt .welcome-content .content-wrapper .cr-btn-default.crx-animated,
.cr-cost .cost-content .single-cost h4.crx-animated,
.cr-cost .cost-content .single-cost p.crx-animated,
.cr-cost .cost-content .cost1.crx-animated .icon img,
.cr-cost .cost-content .cost2.crx-animated .circle-child3,
.cr-team .single-member:hover .social-contact,
.cr-team .single-member:hover .social-contact li,
.cr-provided-services .service-list h2.crx-animated,
.cr-provided-services .service-list ul.crx-animated,
.cr-testimonial .section-title.crx-animated,
.portfolio-banner .ipad-img .img1.crx-animated,
.portfolio-banner .ipad-img .img2.crx-animated,
.portfolio-banner .banner-content h1.crx-animated,
.portfolio-banner .banner-content p.crx-animated,
.featured-portfolio .content-wrapper .content-area p.crx-animated,
.featured-portfolio .content-wrapper .content-area .cr-btn-default.crx-animated,
.service-banner .service-banner-img.crx-animated,
.service-welcome-txt .welcome-content .verticle-txt.crx-animated,
.service-welcome-txt .welcome-content p.crx-animated,
.service-welcome-txt .welcome-content .cr-btn-default.crx-animated,
.cr-service .service-1 .content-image .icon-wrapper img.service-icon11.crx-animated,
.cr-service .service-1 .content-image .icon-wrapper img.service-icon12.crx-animated,
.cr-service .service-1 .content-image .icon-wrapper img.service-icon13.crx-animated,
.cr-service .service-2 .content-image .icon-wrapper.crx-animated,
.cr-service .service-3 .content-image .icon-wrapper.crx-animated,
.cr-service .service-4 .content-image .icon-wrapper img.service-icon41.crx-animated,
.cr-service .service-4 .content-image .icon-wrapper .service-icon42.crx-animated,
.cr-service .service-4 .content-image .icon-wrapper .service-icon42 img,
.cr-service .service-5 .content-image .icon-wrapper img.crx-animated,
.cr-service .service-6 .content-image .icon-wrapper.crx-animated:before,
.cr-service .service-6 .content-image .icon-wrapper img.crx-animated,
.free-service .service-illustration1.crx-animated,
.free-service .service-illustration2.crx-animated,
.free-service .free-single-item h5.crx-animated,
.free-service .free-single-item p.crx-animated,
.case-study-banner .banner-content a img.crx-animated,
.case-study-banner .banner-content p.crx-animated,
.case-study-banner .banner-content a.crx-animated,
.case-details .key-point h4.crx-animated,
.case-details .about-project h4.crx-animated,
.case-details .about-project p.crx-animated,
.sample-page img.crx-animated,
.project-typography .typo-title h4.crx-animated,
.project-typography .project-font-family .single-font-family h5.crx-animated,
.project-typography .project-font-family .single-font-family ul.crx-animated,
.project-typography .project-color .color-title h4.crx-animated,
.responsive-device .device-mockup img.crx-animated {
    opacity: 1;
    visibility: visible;
}



.align-center-center {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
}
.align-col-left-center {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
}
.align-col-left-bottom {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-end;
}
.align-col-right-center {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    justify-content: center;
}
.align-col-right-bottom {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    justify-content: flex-end;
}
.align-col-center-bottom {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
}

.align-row-left-top {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
}
.align-row-left-center {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
}
.align-row-right-center {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;
}
.align-row-center-center {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
.align-row-spacebetween {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
}


//--------inner page banner----------
.inner-page-banner {
    background: #00146b;
    overflow: hidden; 
}
.inner-page-banner .about-banner-img {
    position: absolute;
    right: -18px;
    bottom: 0;
    width: 28vw;
    -webkit-transform: translateX(50px);
    -moz-transform: translateX(50px);
    -ms-transform: translateX(50px);
    -o-transform: translateX(50px);
    transform: translateX(50px); 
}
.inner-page-banner .about-banner-img.crx-animated {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: all 0.8s ease 0.3s;
    -moz-transition: all 0.8s ease 0.3s;
    -ms-transition: all 0.8s ease 0.3s;
    -o-transition: all 0.8s ease 0.3s;
    transition: all 0.8s ease 0.3s; 
}
.inner-page-banner .banner-content {
    height: 635px; 
}
.inner-page-banner .banner-content h1 {
    max-width: 750px;
    width: 100%;
    -webkit-transform: translateY(-50px);
    -moz-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    -o-transform: translateY(-50px);
    transform: translateY(-50px); 
}
.inner-page-banner .banner-content h1.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -ms-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: all 0.8s ease; 
}

//--------blog page typography-----
.blog .blog-list h1,
.archive .blog-list h1,
.single .blog-list h1,
.single .blog-details h1 {
    font-size: 30px;
    line-height: 40px;
    letter-spacing: normal; 
}
.blog .blog-list h2,
.archive .blog-list h2,
.single .blog-list h2,
.single .blog-details h2 {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: normal; 
}
.blog .blog-list h3,
.archive .blog-list h3,
.single .blog-list h3,
.single .blog-details h3 {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: normal; 
}
.blog .blog-list h4,
.archive .blog-list h4,
.single .blog-list h4,
.single .blog-details h4 {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: normal; 
}
.blog .blog-list h5,
.archive .blog-list h5,
.single .blog-list h5,
.single .blog-details h5 {
    font-size: 18px;
    line-height: 30px;
    letter-spacing: normal; 
}
.blog .blog-list h6,
.archive .blog-list h6,
.single .blog-list h6,
.single .blog-details h6 {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: normal; 
}
.blog .blog-list p,
.archive .blog-list p,
.single .blog-list p,
.single .blog-details p {
    font-size: 20px;
    line-height: 34px;
    margin-bottom: 15px; 
}

//-----------post pagination----------
.post-pagination {
    text-align: center;
    padding-top: 30px; 
}
.post-pagination .current,
.post-pagination .page-numbers {
    display: inline-block;
    font-size: 20px;
    color: #23252d;
    padding: 0 20px;
    font-family: 'CircularStd-Medium'; 
}
.post-pagination .current:hover,
.post-pagination .page-numbers:hover {
    color: #00b4ff; 
}
.post-pagination .current {
    color: #00b4ff; 
}
.post-pagination .next span,
.post-pagination .prev span {
    font-size: 22px;
    width: 50px;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    color: #23252d;
    position: relative; 
}
.post-pagination .next span:before,
.post-pagination .prev span:before {
    content: "";
    width: 30px;
    height: 1px;
    background: #23252d;
    position: absolute;
    top: 12px; 
    transition: all 0.4s ease;
}
.post-pagination .prev span {
    text-align: left; 
}
.post-pagination .prev span:before {
    right: 0; 
}
.post-pagination .prev span:hover:before {
    right: 16px; 
}
.post-pagination .next span {
    text-align: right; 
}
.post-pagination .prev span svg,
.post-pagination .next span svg {
    width: 9px;
    position: relative;
    top: 1px;
}
.post-pagination .next span:before {
    left: 0; 
}
.post-pagination .next span:hover:before {
    left: 16px; 
}

@media (max-width: 767px) {
  .post-pagination .next span:hover:before {
    left: 8px;
    top: 13px;
  }
  .post-pagination .prev span:hover:before {
      right: 8px;
      top: 13px;
  }
}


.blog-list .post-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin-left: -60px; 
}
.blog-list .single-post {
    width: calc(50% - 60px);
    margin-left: 60px;
    margin-bottom: 87px; 
}

.blog-list .single-post > figure span{
	position: relative !important;
    inset: inherit !important;
}

.blog-list .single-post > figure span img {
	width: auto !important;
    height: auto !important;
	position: relative !important;
}

.blog-list .single-post figure img {
    width: 100%;
    -webkit-transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
    -ms-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear; 
}
.blog-list .single-post:hover figure img {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 2.5s linear;
    -moz-transition: all 2.5s linear;
    -ms-transition: all 2.5s linear;
    -o-transition: all 2.5s linear;
    transition: all 2.5s linear; 
}
.blog-list .post-title h2 {
    // padding-top: 37px; 
}
.blog-list .post-title .category {
    margin-bottom: 5px;
    line-height: 24px; 
}
.blog-list .post-title .category a {
    display: inline-block;
    font-family: 'Circular Std Bold';
    text-transform: uppercase;
    font-size: 16px;
    margin-right: 10px;
    letter-spacing: 0.5px;
    line-height: normal; 
}
.blog-list .post-title .category a:last-child{
    margin-right: 0;
}
.blog-list .post-title .category a:last-child span{
    display: none;
}
.blog-list .post-title .category a:hover {
    text-decoration: underline; 
}
.blog-list .post-title a.blog-title{
    color: #23252d;
    display: block; 
}
.blog-list .post-title a.blog-title:hover {
    color: #00b4ff; 
}






.portfolio-section {
    padding-bottom: 0;
}

@media (max-width: 1500px) {
    .portfolio-section {
        padding-top: 130px;
        padding-bottom: 0;
    }
}

@media (max-width: 991px) {
    .portfolio-section {
        padding-top: 100px;
    }
}

.portfolio-section .svg-btn-effect {
    display: block;
    width: 200px;
    margin: 0 auto;
    padding: 0 20px;
}

.portfolio-section .portfolio-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin-left: -60px;
}

@media (max-width: 1300px) {
    .portfolio-section .portfolio-wrapper {
        margin-left: -30px;
    }
}

@media (max-width: 767px) {
    .portfolio-section .portfolio-wrapper {
        margin-left: 0;
        display: block;
    }
}

.portfolio-section .portfolio-wrapper .single-portfolio {
    width: calc(50% - 60px);
    margin-left: 60px;
    margin-bottom: 90px;
}

@media (max-width: 1300px) {
    .portfolio-section .portfolio-wrapper .single-portfolio {
        width: calc(50% - 30px);
        margin-left: 30px;
        margin-bottom: 60px;
    }
}

@media (max-width: 767px) {
    .portfolio-section .portfolio-wrapper .single-portfolio {
        width: 100%;
        margin-left: 0;
        margin-bottom: 40px;
    }
}

@media (max-width: 767px) {
    .portfolio-section .portfolio-wrapper .single-portfolio:last-child {
        margin-bottom: 70px;
    }
}

.portfolio-section .portfolio-wrapper .single-portfolio figure {
    overflow: hidden;
    position: relative;
}

.portfolio-section .portfolio-wrapper .single-portfolio figure:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1;
}

.portfolio-section .portfolio-wrapper .single-portfolio figure.crx-animated:before {
    width: 0;
    -webkit-transition: all 0.8s ease 0.2s;
    -moz-transition: all 0.8s ease 0.2s;
    -ms-transition: all 0.8s ease 0.2s;
    -o-transition: all 0.8s ease 0.2s;
    transition: all 0.8s ease 0.2s;
}

.portfolio-section .portfolio-wrapper .single-portfolio figure img {
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
}

.portfolio-section .portfolio-wrapper .single-portfolio figure:hover img {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 2.5s linear;
    -moz-transition: all 2.5s linear;
    -ms-transition: all 2.5s linear;
    -o-transition: all 2.5s linear;
    transition: all 2.5s linear;
}

.portfolio-section .portfolio-wrapper .single-portfolio:nth-child(even) figure.crx-animated:before {
    -webkit-transition: all 0.8s ease 0.6s;
    -moz-transition: all 0.8s ease 0.6s;
    -ms-transition: all 0.8s ease 0.6s;
    -o-transition: all 0.8s ease 0.6s;
    transition: all 0.8s ease 0.6s;
}

.portfolio-section .portfolio-wrapper .portfolio-title {
    padding-top: 32px;
}

@media (max-width: 991px) {
    .portfolio-section .portfolio-wrapper .portfolio-title {
        padding-top: 15px;
    }
}

.portfolio-section .portfolio-wrapper .portfolio-title .title {
    font-size: 30px;
    line-height: 40px;
    color: #23252d;
    display: inline-block;
}

@media (max-width: 991px) {
    .portfolio-section .portfolio-wrapper .portfolio-title .title {
        font-size: 24px;
        line-height: 32px;
    }
}

@media (max-width: 575px) {
    .portfolio-section .portfolio-wrapper .portfolio-title .title {
        font-size: 23px;
    }
}

.portfolio-section .portfolio-wrapper .portfolio-title .title img {
    display: inline-block;
    margin-left: 5px;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

.portfolio-section .portfolio-wrapper .portfolio-title .title:hover img {
    margin-left: 10px;
}

.portfolio-section .portfolio-wrapper .portfolio-title .category {
    line-height: 28px;
}

@media (max-width: 991px) {
    .portfolio-section .portfolio-wrapper .portfolio-title .category {
        line-height: 20px;
    }
}

.portfolio-section .portfolio-wrapper .portfolio-title .category span,
.portfolio-section .portfolio-wrapper .portfolio-title .category a {
    color: #23252d;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Circular Std Bold';
}

@media (max-width: 991px) {

    .portfolio-section .portfolio-wrapper .portfolio-title .category span,
    .portfolio-section .portfolio-wrapper .portfolio-title .category a {
        font-size: 13px;
    }
}





@media (max-width: 1700px) {
    .inner-page-banner .banner-content {
        height: 550px; 
    } 
}

@media (max-width: 1300px) {
    .blog-list .post-wrapper {
        margin-left: -30px; 
    } 
    .blog-list .single-post {
        width: calc(50% - 30px);
        margin-left: 30px; 
    } 
}

@media (max-width: 1199px) {
    .inner-page-banner .banner-content {
        height: 470px;
        align-items: flex-start;
        text-align: left; 
    }
    
    .blog .blog-list h1,
	.blog .blog-list h2,
    .archive .blog-list h1,
    .single .blog-list h1,
    .single .blog-details h1 {
        font-size: 26px;
        line-height: 32px; 
    }

    .blog-list {
        padding-bottom: 64px; 
    }
    .blog-list .single-post {
        margin-bottom: 47px; 
    }
}

@media (max-width: 991px) {
    .inner-page-banner .banner-content {
        height: 410px; 
    } 
}

@media (max-width: 575px) {
    .inner-page-banner .about-banner-img {
        display: none; 
    } 
    .inner-page-banner .banner-content {
        text-align: center;
        align-items: center; 
    }
	.blog-list .single-post {
        width: 100%;
		// margin-left: 30px;
         
    }
	.blog .blog-list h1,
	.blog .blog-list h2,
    .archive .blog-list h1,
    .single .blog-list h1,
    .single .blog-details h1 {
        font-size: 22px;
         
    }
	img.custom-logo-link {
		display: block;
		max-width: 80%;
	}
	
}

img.custom-logo-link {
    display: block;
}
img.blog-logo {
    display: none;
}

.blog img.custom-logo-link {
    display: none;
}
.blog img.blog-logo {
    display: block;
}

.blog.blog-paging img.custom-logo-link {
    display: block;
}
.blog.blog-paging img.blog-logo {
    display: none;
}

.cookieConsent {
    justify-content: center!important;
}
.cookieConsent > div {
    flex: inherit!important;
}

@media (max-width: 575px){
    .cookieConsent {
        padding-bottom: 10px!important;
    }
}


`;

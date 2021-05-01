import { createGlobalStyle } from "styled-components"

/* eslint-disable-next-line @typescript-eslint/naming-convention */
export const Theme = createGlobalStyle`
  :root {
    --base-size:                    16px;

    --font-heading:                 'Bubblegum Sans', sans-serif;
    --font-text:                    'Montserrat', sans-serif;

    --color-violet-even-lighter:    #E0AAFF;
    --color-violet-lightest:        #C77DFF;
    --color-violet-lighter:         #9D4EDD;
    --color-violet-light:           #7B2CBF;
    --color-violet:                 #5A189A;
    --color-violet-dark:            #3C096C;
    --color-violet-darker:          #240046;
    --color-violet-darkest:         #10002B;

    --color-white:                  #ffffff;
    --color-white-dark:             #eaeaea;
    --color-white-darker:           #e8e8e8;

    --color-gray-light:             #bbbbbb;
    --color-gray:                   #777777;
    --color-gray-dark:              #333333;
    --color-black:                  #2b2b2b;
    --color-blackest:               #000000;

    --bg:                           var(--color-violet-darkest);

    --border-width:                 1px;
    --border-radius:                4px;
    --border-color:                 var(--bg);

    --heading-font-family:          var(--font-heading);
    --heading-line-height:          1.5;
    --heading-color:                var(--color-white);
    --heading-font-weight:          500;
    --heading-text-transform:       none;

    --text-font-family:             var(--font-text);
    --text-line-height:             1.15;
    --text-color:                   var(--color-white);
    --text-font-weight:             300;

    // SIZING

    --font-xxs: clamp(0.6875rem,  calc(0.6875rem + ((1vw - 0.2rem) * 0.3125)), 0.8125rem);
    --font-xs:  clamp(0.75rem,    calc(0.75rem   + ((1vw - 0.2rem) * 0.3125)), 0.875rem);
    --font-sm:  clamp(0.8125rem,  calc(0.8125rem + ((1vw - 0.2rem) * 0.4688)), 1rem);
    --font-md:  clamp(0.875rem,   calc(0.875rem  + ((1vw - 0.2rem) * 0.625)),  1.125rem);
    --font-lg:  clamp(1rem,       calc(1rem      + ((1vw - 0.2rem) * 1.25)),   1.5rem);
    --font-xl:  clamp(1.5rem,     calc(1.5rem    + ((1vw - 0.2rem) * 3.75)),   2.5rem);
    --font-xxl: clamp(2.5rem,     calc(2rem      + ((1vw - 0.2rem) * 6.25)),   5rem);


  }

  html {
    box-sizing:     border-box;
    font-size:      var(--base-size);
  }

  *,
  *::before,
  *::after {
    box-sizing:     inherit;
  }

  body {
    background:     var(--bg);
    color:          var(--text-color);
    font-family:    var(--text-font-family);
    font-weight:    var(--text-font-weight);
    line-height:    var(--text-line-height);
    letter-spacing: var(--text-spacing);

    display: grid;
    margin: 0 1rem;
    position: relative;
    place-content: center;
    place-items: center; 
    text-rendering: geometricPrecision;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    all: unset;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    min-height: fit-content;

    color:          var(--heading-color);
    font-size:      var(--font-lg);
    font-family:    var(--heading-font-family);
    font-weight:    var(--heading-font-weight);
    line-height:    var(--heading-line-height);
    letter-spacing: var(--text-spacing);
    text-transform: var(--heading-text-transform);
  }

  p {
    color:          var(--text-color);
  }
`

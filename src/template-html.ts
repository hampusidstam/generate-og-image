export function getCss(website: any) {
  const sitesCss: object = {
    'thelocalhost.io': `
      body {
        background: linear-gradient(0.25turn,
          rgba(170,127,212,1) , rgba(102,51,153,1) );
        height: 100vh;
        font-family: 'Space Mono', sans-serif;
        font-size: 18px;
        padding: 20px;
      }
      .container {
        position: relative;
        height: calc(100vh - 40px);
        padding: 20px;
        background: #f7fafc;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        border-radius: 14px;
      }
      .title {
        font-size: 6em;
        height: 4em;
        overflow: hidden;
        color: #1a202c;
        word-spacing: -20px;
        background: linear-gradient(
          rgba(102,51,153,1),
          rgba(170,127,212,1)
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .author {
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding: 30px;
        font-size: 3em;
        color: #4a5568;
      }
      .author-image {
        width: 1.5em;
        border-radius: 50%;
        margin-bottom: -9px;
      }
      .website {
        position: absolute;
        bottom: 0px;
        right: 0px;
        padding: 30px;
        font-size: 2em;
        color: #4a5568;
      }
    `,
    'scottspence.com': `
      body {
        background: linear-gradient(0.25turn,
          rgba(170,127,212,1) , rgba(102,51,153,1) );
        height: 100vh;
        font-family: 'Space Mono', sans-serif;
        font-size: 18px;
        padding: 20px;
      }
      .container {
        position: relative;
        height: calc(100vh - 40px);
        padding: 20px;
        background: #f7fafc;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        border-radius: 14px;
      }
      .title {
        font-size: 6em;
        height: 4em;
        overflow: hidden;
        color: #1a202c;
        word-spacing: -20px;
        background: linear-gradient(
          rgba(102,51,153,1),
          rgba(170,127,212,1)
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .author {
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding: 30px;
        font-size: 3em;
        color: #4a5568;
      }
      .author-image {
        width: 1.5em;
        border-radius: 50%;
        margin-bottom: -9px;
      }
      .website {
        position: absolute;
        bottom: 0px;
        right: 0px;
        padding: 30px;
        font-size: 2em;
        color: #4a5568;
      }
      `,
    'cheatsheets.xyz': `
      body {
        background: linear-gradient(0.25turn,
          rgb(66, 153, 225) , rgb(245, 101, 101) );
        height: 100vh;
        font-family: 'Space Mono', sans-serif;
        font-size: 18px;
        padding: 50px;
      }
      .container {
        position: relative;
        height: calc(100vh - 100px);
        padding: 50px;
        background: #f7fafc;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        border-radius: 14px;
      }
      .title {
        font-size: 5.4em;
        height: 4em;
        overflow: hidden;
        color: #1a202c;
        word-spacing: -20px;
        background: linear-gradient(
          rgb(245, 101, 101) ,
          rgb(66, 153, 225)
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .author {
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding: 50px;
        font-size: 3em;
        color: #4a5568;
      }
      .author-image {
        width: 1.5em;
        border-radius: 50%;
        margin-bottom: -9px;
      }
      .website {
        position: absolute;
        bottom: 0px;
        right: 0px;
        padding: 50px;
        font-size: 2em;
        color: #4a5568;
      }
      `,
  }

  return sitesCss[website]
}

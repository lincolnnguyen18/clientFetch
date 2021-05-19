(async () => {
    const response = await fetch('https://novel18.syosetu.com/n3746ce/100', {
      headers: {
        'Connection': 'keep-alive',
        'sec-ch-ua': '^\^',
        'sec-ch-ua-mobile': '?0',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Referer': 'https://nl.syosetu.com/',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cookie': 'ses=YRj28VPPpH1fqf6agHHrd2; over18=yes'
      }
    });

    var text = await response.text();
    const dom = await new JSDOM(text);
    const paragraphs = dom.window.document.getElementById('novel_color').querySelectorAll('p');
    var paragraphArray = []
    for (let i = 0; i < paragraphs.length; i++) {
      console.log(paragraphs[i].textContent)
      // paragraphArray.push(new Paragraph(paragraphs[i].textContent))
    }
    // console.log(title)
    // console.log(title);
    // console.log(dom.window.document.getElementById('app').querySelectorAll('ul.ranked-list li'));
    // console.log(text.split("\n"));

    // const doc = new Document({
    //     sections: [{
    //         properties: {},
    //         children: paragraphArray
    //     }],
    // });

    // const b64string = await Packer.toBase64String(doc);
    
    // res.setHeader('Content-Disposition', 'attachment; filename=My Document.docx');
    // res.send(Buffer.from(b64string, 'base64'));
  })()
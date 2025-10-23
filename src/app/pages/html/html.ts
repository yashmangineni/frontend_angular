import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface QA {
  q: string;
  a: string;
}
@Component({
  selector: 'app-html',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './html.html',
  styleUrls: ['./html.scss']
})
export class Html {
  qaData: QA[] = [
    {
      q: 'What is HTML?',
      a: 'HTML (HyperText Markup Language) is the standard language used to create **web pages**. It structures content by using elements or tags like <p>, <div>, <a>, <img>, etc.'
    },
    {
      q: 'What are the different types of HTML?',
      a: '1. **HTML 4.01** – Older version used widely before HTML5.\n2. **XHTML 1.0** – Stricter XML-based HTML.\n3. **HTML5** – Latest version with support for multimedia, graphics, and APIs.'
    },
    {
      q: 'What is the difference between HTML and HTML5?',
      a: 'HTML5 adds support for:\n- Multimedia tags (<audio>, <video>)\n- Semantic elements (<header>, <footer>, <section>)\n- Canvas and SVG for graphics\n- Offline storage (localStorage, sessionStorage)\n- New form elements (<date>, <email>, <number>)'
    },
    {
      q: 'What are HTML tags?',
      a: 'HTML tags are predefined codes used to **define elements on a web page**. They are enclosed in angle brackets, e.g., <p>, <h1>, <a>, <img>.'
    },
    {
      q: 'What is the difference between block-level and inline elements?',
      a: 'Block-level elements take up the **full width** and start on a new line (e.g., <div>, <p>, <h1>). Inline elements take up only the **width of the content** and do not start on a new line (e.g., <span>, <a>, <img>).'
    },
    {
      q: 'What are semantic elements in HTML5?',
      a: 'Semantic elements **clearly describe their meaning** to the browser and developer. Examples: <header>, <footer>, <section>, <article>, <nav>.'
    },
    {
      q: 'What is the difference between <div> and <span>?',
      a: '<div> is a **block-level container**, while <span> is an **inline container**. Both are used for grouping content for styling or scripting purposes.'
    },
    {
      q: 'What are HTML attributes?',
      a: 'Attributes provide **additional information** about HTML elements. Example: <a href="https://example.com" target="_blank">Link</a>. Common attributes: id, class, style, href, src, alt.'
    },
    {
      q: 'What is the difference between <ul>, <ol>, and <li>?',
      a: '<ul> creates an **unordered list** (bullets), <ol> creates an **ordered list** (numbers), and <li> defines a **list item** inside both.'
    },
    {
      q: 'What is the purpose of the <form> tag?',
      a: '<form> is used to **collect user input** and send it to the server. Example: login, registration, or feedback forms.'
    },
    {
      q: 'What are HTML input types?',
      a: 'Common input types include: text, password, email, number, date, checkbox, radio, file, submit, reset, button.'
    },
    {
      q: 'What is the difference between <iframe> and <embed>?',
      a: '<iframe> is used to **embed another HTML page** within a page. <embed> is used to **embed external content** like PDFs, videos, or plugins.'
    },
    {
      q: 'What is the difference between id and class?',
      a: 'id: Unique identifier for a single element. Used for **JavaScript or CSS** targeting.\nclass: Can be assigned to **multiple elements**. Used for grouping and styling similar elements.'
    },
    {
      q: 'What are HTML meta tags?',
      a: 'Meta tags provide **metadata** about the HTML document. Example: <meta charset="UTF-8"> sets character encoding. Others include keywords, description, author, viewport.'
    },
    {
      q: 'What is the difference between <strong> and <b>?',
      a: '<strong> represents **important text** (semantic), while <b> just makes text **bold** without semantic meaning.'
    },
    {
      q: 'What is the difference between <em> and <i>?',
      a: '<em> represents **emphasized text** (semantic), while <i> just makes text **italic** without semantic meaning.'
    },
    {
      q: 'What are HTML comments?',
      a: 'Comments are used to **add notes in HTML code** that are not displayed in the browser. Syntax: <!-- This is a comment -->'
    },
    {
      q: 'What is the difference between HTML and CSS?',
      a: 'HTML defines **structure** of web pages. CSS defines **style** (layout, colors, fonts) of HTML elements.'
    },
    {
      q: 'What is the difference between inline, internal, and external CSS?',
      a: '1. Inline CSS – style="color:red" inside an element.\n2. Internal CSS – <style> tag inside <head>.\n3. External CSS – linked via <link> to a separate CSS file.'
    },
    {
      q: 'What is HTML5?',
      a: 'HTML5 is the latest version of HTML with **new elements, attributes, and APIs**. It supports multimedia, graphics, offline storage, and better semantic structure.'
    },
    {
      q: 'What are new semantic elements in HTML5?',
      a: 'New semantic elements include: <header>, <footer>, <nav>, <section>, <article>, <aside>, <main>, <figure>, <figcaption>. These elements provide meaning and improve accessibility and SEO.'
    },
    {
      q: 'What are new form elements in HTML5?',
      a: 'HTML5 added input types: date, email, number, range, search, tel, url, color. It also added attributes: placeholder, required, autofocus, autocomplete, pattern.'
    },
    {
      q: 'What is the <canvas> element?',
      a: '<canvas> allows **dynamic rendering of 2D graphics** via JavaScript. Example: drawing shapes, charts, and animations on the fly.'
    },
    {
      q: 'What is the <audio> and <video> element?',
      a: '<audio> and <video> allow embedding **multimedia content** directly in web pages without plugins. They support attributes like controls, autoplay, loop, muted.'
    },
    {
      q: 'What is the <picture> element?',
      a: '<picture> allows **responsive images** by specifying different sources for different screen sizes or resolutions using <source> tags.'
    },
    {
      q: 'What is localStorage and sessionStorage in HTML5?',
      a: 'They are part of Web Storage API.\n- localStorage: Stores data permanently until manually cleared.\n- sessionStorage: Stores data for the current browser session only.'
    },
    {
      q: 'What is the difference between <section> and <div>?',
      a: '<section> is **semantic** and represents a standalone section of content, while <div> is a generic container with **no semantic meaning**.'
    },
    {
      q: 'What is the difference between <article> and <section>?',
      a: '<article> represents **independent content** that can stand alone (e.g., blog post), while <section> is a thematic grouping of content within a page.'
    },
    {
      q: 'What is the difference between <aside> and <nav>?',
      a: '<aside> represents **sidebar content** or tangential info, while <nav> represents **navigation links** for a website.'
    },
    {
      q: 'What are data-* attributes?',
      a: 'data-* attributes allow embedding **custom data** in HTML elements. Example: <div data-user="123">. Useful for JavaScript access.'
    },
    {
      q: 'What is the <progress> and <meter> element?',
      a: '<progress> shows **task progress**, <meter> shows **measurement within a range**. Both are HTML5 elements for visual indicators.'
    },
    {
      q: 'What are HTML5 APIs?',
      a: 'HTML5 provides APIs like:\n- Canvas API\n- Web Storage API (localStorage, sessionStorage)\n- Geolocation API\n- Drag and Drop API\n- Web Workers\n- Offline/Cache API\n- WebSockets API'
    },
    {
      q: 'What is the difference between <b> and <strong> in HTML5?',
      a: '<b> is **bold text** without meaning, <strong> indicates **important text** (semantic), improving accessibility.'
    },
    {
      q: 'What is the difference between <i> and <em> in HTML5?',
      a: '<i> is **italic text** for styling, <em> indicates **emphasized text** (semantic), important for screen readers and SEO.'
    }
  ]
}

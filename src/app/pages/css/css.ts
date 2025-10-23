import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface QA {
  q: string;
  a: string;
}
@Component({
  selector: 'app-css',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './css.html',
  styleUrls: ['./css.scss']
})
export class Css {
  qaData: QA[] = [
    {
      q: 'What is CSS?',
      a: 'CSS (Cascading Style Sheets) is used to **style and format HTML elements**. It controls layout, colors, fonts, spacing, and positioning of web page elements.'
    },
    {
      q: 'What are the different types of CSS?',
      a: '1. **Inline CSS** – Using style attribute inside HTML elements.\n2. **Internal CSS** – Using <style> tag in the head section.\n3. **External CSS** – Linking an external .css file using <link> tag.'
    },
    {
      q: 'What is the difference between ID and Class selectors?',
      a: 'ID (#id) is **unique** and applied to one element. Class (.class) can be applied to **multiple elements**.'
    },
    {
      q: 'What is the difference between relative, absolute, fixed, and sticky positioning?',
      a: '1. **relative** – positioned relative to its normal position.\n2. **absolute** – positioned relative to nearest positioned ancestor.\n3. **fixed** – positioned relative to viewport; stays on screen.\n4. **sticky** – toggles between relative and fixed based on scroll position.'
    },
    {
      q: 'What is the difference between inline, block, and inline-block elements?',
      a: '1. **inline** – does not start a new line (e.g., <span>).\n2. **block** – starts on a new line, takes full width (e.g., <div>).\n3. **inline-block** – behaves like inline but allows block properties like width and height.'
    },
    {
      q: 'What is the difference between relative units (em, rem) and absolute units (px)?',
      a: '**px** – fixed size in pixels.\n**em** – relative to the font size of the parent.\n**rem** – relative to the font size of the root element.'
    },
    {
      q: 'What are pseudo-classes in CSS?',
      a: 'Pseudo-classes define **special states of elements**. Examples: :hover, :focus, :first-child, :nth-child(n), :active.'
    },
    {
      q: 'What are pseudo-elements in CSS?',
      a: 'Pseudo-elements define **specific parts of elements**. Examples: ::before, ::after, ::first-letter, ::first-line.'
    },
    {
      q: 'What is the difference between relative, absolute, and fixed positioning in CSS?',
      a: 'Relative: Moves element relative to its normal position.\nAbsolute: Positions element relative to nearest positioned ancestor.\nFixed: Stays fixed relative to viewport even when scrolling.'
    },
    {
      q: 'What is the difference between inline style, internal style, and external style?',
      a: 'Inline: style="color:red"\nInternal: <style> inside HTML <head>\nExternal: linked CSS file <link rel="stylesheet">'
    },
    {
      q: 'What is the difference between CSS Grid and Flexbox?',
      a: 'Flexbox – one-dimensional layout (row or column).\nGrid – two-dimensional layout (rows and columns).\nUse Flexbox for smaller layouts and Grid for complex layouts.'
    },
    {
      q: 'What are media queries?',
      a: 'Media queries allow **responsive design** by applying CSS based on device width, height, orientation, or resolution. Example:\n@media (max-width: 768px) { body { background: lightblue; } }'
    },
    
      {
        q: 'What is the CSS Box Model?',
        a: 'The CSS Box Model describes how **elements are structured and spaced** in a web page. Every element is represented as a rectangular box consisting of **content, padding, border, and margin**.'
      },
      {
        q: 'What are the parts of the Box Model?',
        a: '1. **Content** – The actual content of the element (text, images, etc.).\n2. **Padding** – Space between content and border. It adds extra space inside the element.\n3. **Border** – Surrounds the padding (and content) and can have width, style, and color.\n4. **Margin** – Space outside the border. Creates distance between elements.'
      },
      {
        q: 'What is the difference between padding and margin?',
        a: 'Padding is the **space inside** the element between content and border.\nMargin is the **space outside** the element between the element’s border and surrounding elements.'
      },
      {
        q: 'What is the difference between border and outline?',
        a: 'Border is part of the box model and affects layout.\nOutline is **drawn outside** the element’s border and does not affect layout or size.'
      },
      {
        q: 'What is the default box-sizing in CSS?',
        a: 'By default, **box-sizing is content-box**, which means width and height only include the content. Padding and border are added outside this size.'
      },
      {
        q: 'How to include padding and border in the element’s total width?',
        a: 'Use **box-sizing: border-box;** This makes the width and height include **content + padding + border**, making sizing easier and layout predictable.'
      },
      {
        q: 'What is the difference between content-box and border-box?',
        a: 'content-box: width/height include only the content, padding and border are added outside.\nborder-box: width/height include content, padding, and border inside the specified size.'
      },
    {
      q: 'What is the difference between relative, absolute, fixed, and sticky positioning?',
      a: 'Relative: relative to normal position\nAbsolute: relative to nearest positioned ancestor\nFixed: relative to viewport\nSticky: toggles between relative and fixed when scrolling'
    },
    {
      q: 'What is the difference between visibility:hidden and display:none?',
      a: 'visibility:hidden – element is invisible but takes space.\ndisplay:none – element is removed from layout and takes no space.'
    },
    {
      q: 'What are transitions in CSS?',
      a: 'Transitions allow **smooth changes** between property values. Example:\ntransition: all 0.3s ease;'
    },
    {
      q: 'What are animations in CSS?',
      a: 'Animations allow **keyframe-based movement or property changes**. Example:\n@keyframes slide { from {left:0;} to {left:100px;} }\ndiv { animation: slide 2s infinite; }'
    },
    {
      q: 'What is the difference between relative, absolute, and fixed positioning in CSS?',
      a: 'Relative: relative to its normal position\nAbsolute: relative to nearest positioned ancestor\nFixed: fixed relative to viewport even when scrolling'
    },
    {
      q: 'What is the difference between relative, absolute, fixed, and sticky positioning?',
      a: 'Relative: Moves element relative to its normal position.\nAbsolute: Positions element relative to nearest positioned ancestor.\nFixed: Stays fixed relative to viewport.\nSticky: Switches between relative and fixed based on scroll.'
    },
    {
      q: 'What is the difference between inline, block, and inline-block elements?',
      a: 'Inline: does not start a new line and only takes width of content.\nBlock: starts on a new line and takes full width.\nInline-block: behaves like inline but accepts width/height properties.'
    },
    {
      q: 'What are pseudo-classes in CSS?',
      a: 'Pseudo-classes define **special states** of elements. Examples: :hover, :focus, :nth-child(), :first-child.'
    },
    {
      q: 'What are pseudo-elements in CSS?',
      a: 'Pseudo-elements define **specific parts** of elements. Examples: ::before, ::after, ::first-letter, ::first-line.'
    },
    {
      q: 'What is CSS specificity?',
      a: 'Specificity determines which CSS rule applies when multiple rules target the same element. Inline styles > ID selectors > Class/attribute/pseudo-class selectors > Element/pseudo-element selectors.'
    },
    {
      q: 'What is the difference between relative, absolute, fixed, and sticky positioning?',
      a: 'Relative: relative to normal position.\nAbsolute: relative to nearest positioned ancestor.\nFixed: fixed to viewport.\nSticky: switches between relative and fixed based on scroll.'
    },
    {
      q: 'What is the difference between visibility:hidden and display:none?',
      a: 'visibility:hidden: element is invisible but still occupies space.\ndisplay:none: element is removed from the layout and occupies no space.'
    },
    {
      q: 'What is the difference between em, rem, %, and px units in CSS?',
      a: 'px: absolute pixels.\nem: relative to parent font size.\nrem: relative to root font size.\n%: relative to parent element size.'
    },
    {
      q: 'What is the difference between relative, absolute, fixed, and sticky positioning in CSS?',
      a: 'Relative: relative to normal position.\nAbsolute: relative to nearest positioned ancestor.\nFixed: fixed relative to viewport.\nSticky: toggles between relative and fixed when scrolling.'
    },
    {
      q: 'What are CSS transitions and how do they work?',
      a: 'Transitions allow **smooth changes** between property values. Example: transition: all 0.3s ease;'
    },
    {
      q: 'What are CSS animations and keyframes?',
      a: 'Animations allow **keyframe-based property changes**. Example:\n@keyframes slide { from {left:0;} to {left:100px;} }\ndiv { animation: slide 2s infinite; }'
    },
    {
      q: 'What is the difference between inline, internal, and external CSS?',
      a: 'Inline: style attribute in element.\nInternal: <style> tag in <head>.\nExternal: linked CSS file via <link> tag.'
    },
    {
      q: 'What is CSS Grid?',
      a: 'CSS Grid is a **two-dimensional layout system** for arranging elements in rows and columns.'
    },
    {
      q: 'What is CSS Flexbox?',
      a: 'CSS Flexbox is a **one-dimensional layout system** for arranging elements in a row or column with alignment and distribution control.'
    },
    {
      q: 'What are media queries in CSS?',
      a: 'Media queries allow **responsive design** by applying styles based on device characteristics like width, height, orientation, and resolution.'
    },
    {
      q: 'What is the difference between relative, absolute, fixed, and sticky positioning in CSS?',
      a: 'Relative: relative to normal position.\nAbsolute: relative to nearest positioned ancestor.\nFixed: relative to viewport.\nSticky: switches between relative and fixed based on scroll.'
    }
  ]
}

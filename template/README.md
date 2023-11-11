# Template

- Firstly, look desktop design then write HTML code!

- Secondly, code mobile-first when you are CSS coding

# Semantic HTML

- Use semantic tags for better SEO and accessibility.

```
<body>
    <main>
        <article>
        <!-- product image section -->
            <picture>
                <source>
                <img>
            </picture>
        <!-- product content section -->
            <div>
                <p>category</p>
                <h1>Title</h1>
                <p>text</p>
                <div>
                    <p>Price</p>
                    <p>Price</p>
                </div>
                <button>Button</button>
            </div>
        </article>
    </main>
</body>
```

# Mobile First CSS

- Design mobile first

- Use:

  - [CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)

  - :root

  - general styling

  - utilities

  - add fonts in HTML head

## Notes

- In most things in web design, the numbers are as follows:

  - 8px 12px 16px 20px 24px ....

- Never use **px** at font-sizes. Use **rem**

- Use locally scoped custom properties

- In real life, consider **Screen Reading** topic. And hide important variables but include your code. [Screen Read](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html#page_banner)

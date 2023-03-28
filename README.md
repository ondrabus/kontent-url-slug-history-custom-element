# URL slug history custom element for Kontent.ai

This [custom element](https://kontent.ai/learn/tutorials/develop-apps/integrate/content-editing-extensions) for [Kontent.ai](https://kontent.ai) enables users to preserve history of URL slugs.

The element watches the URL slug element for changes. When the slug changes, the element automatically saves the previous URL slug to a history list. It's also possible to manually add and remove history entries.

![Screenshot of custom element](custom-element-screenshot.png)

## Setup

1. Build the code

```
npm run build
```

1. Deploy the code to a secure public host
    * See the [deploying section](#deploying) for a really quick option

1. Follow the instructions in the [custom elements documentation](https://kontent.ai/learn/tutorials/develop-apps/integrate/content-editing-extensions#a-displaying-your-custom-editor-in-kontent) to add the element to a content model.
    * The `Hosted code URL` is where you've deployed the element to in step 1.
    * Add the URL slug element's codename into configuration.

## Configuration

The custom element may only be used for content types that contain the URL slug element. The configuration of the custom element looks like this:

```
{
    "urlSlugElementCodename": "{codename of the URL slug element}"
}
```
This configuration is required and the custom element won't work without it.

## Deploying

Netlify has made this easy. If you click the deploy button below, it will guide you through the process of deploying the element to Netlify and leave you with a copy of this repository in your GitHub account as well.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ondrabus/kontent-url-slug-history-custom-element)

## What is Saved?

The value is an array of strings (old URL slugs).

```
["old-url-slug", "even-older-url-slug"]
```



# Bootcamp Notes
### June 28th
> "We're living the future so the present is our past".
Kanye West.

Today was our second Bootcamp session. **We have learnt a lot!** Guillermo taughts us how to create a commit, and gave us some basic commands to work in Git Bash.

##### MARKDOWN
https://guides.github.com/features/mastering-markdown/

##### A Visual Git Reference
https://marklodato.github.io/visual-git-guide/index-en.html

#### Basic terminal commands
* *ls -l:* lists current dir content.
* *ls:* lists current dir content.
* *ls -a:* lists current dir contents including hidden objects.
* *wt -h:* Help.
* *cd:* Changes to home dir.
* *cd dir:* changes the directory.
* *pwd:* Shows the current directory.
* *mkdir (name):* Creates a directory.
* *rm -r (name):* Removes directory.
* *rm -rf (directory):* Removes directory by force.
* *cp -r dir1 dir2:* Copies dir1 into dir2.
* *cd -:* Changes to previous working directory.
* *rm (name):* remove file.
* *rm -f (name):* remove by force.
* *cp file1 file2:* Copies file1 into file2.
* *mv file1 file2:* Renames or moves file1 into file2.
* *touch file:* Creates or updates a file.
* *more file:* Outputs file.
* *ctrl + u:* erases a line.
* *&uarr;:* previous command.
* *&darr;:* next command.

### June 29th

* *git remote -v:* Lists repositories.
* *git remote add origin:* next command.

#### Web page basic structure

The head  tags contains the configuration files, while the body is used to write the content rendered to the user.
Title

To know more about html tags:
* http://html5doctor.com/

HTML also has The so called *void elements*, such as br, have no content. Therefore there is no need to use closing tags, they are closed by themselves.

The attributes contain different values inside quotes"".

Links can be absolute or relative. The former possess a *Schema* (http..) **+** *Domain* **+** *Path*. The latter doesn't contain any protocol or machine information. Its path generally refers to a resource on the same machine as the current document. Relative URLs may contain relative path components (".." means one level up in the hierarchy defined by the path), and may contain fragment identifiers.

*Relatives paths can also be used on MARKDOWN language.

To know more about DNS:
* https://www.youtube.com/watch?v=2ZUxoi7YNgs
* https://howdns.works/ep1/

URI (*Uniform resource identifier*): is a string of characters used to identify a resource.

To know more about web design visit:
* https://developer.mozilla.org/en-US/docs/Web

To know how to export a vector to svg visit:
* https://helpx.adobe.com/illustrator/how-to/export-svg.html
* https://helpx.adobe.com/es/illustrator/using/svg.html

Each page can have only one lang attribute.


### June 30th

#### HTML entities

* Quotes: &ldquo; &rdquo; &lsquo; &rsquo;
* UTF-8 and HTML entities: to know more visit https://dev.w3.org/html5/html-author/charref

#### CSS Stylesheets

Are made of Selectors, Properties and values. Every page can have multiple stylesheets. Order and specification are important when writing a css stylesheet. Important! is not a good practice.

There are block and inline elements. Blocks occupy the entire space of the div, while inline can coexist with other elements.
Inline elements are online affected by side margins. When designing, use a border is a good practice in order to visualize how much space can take an element.

**Rem** and **em** measures can also be used to style elements.
El **span** encapsula elementos en línea.
Text-align, aligns all the child elements within the parent.

#### Resetting styles

Each browser has predefined styles. This styles can be reseted or "normalized".
To know more visit: https://necolas.github.io/normalize.css/

HTML element can also be selected. Inline elements cannot have borders nor margins. https://hacks.mozilla.org/2015/03/understanding-inline-box-model/

#### Class Selectors

Elements within the body can be selected using selectors.

This property width: calc (100%-x px) allows you to calculate automatically the required space.

#### Pseudo classes

Are special classes possessed by the links:

* :links - A link the user has never visited.
* :visited – A link the user has visited before.
* :hover - A link with the user’s mouse over it.
* :active – A link that’s being pressed down by a mouse (or finger).

** ID'S shouldn't be use for css styles, because they are very specific. The chances to make a mystake are greater. **

### July 1st

#### Class Selectors

* A + B selects the adjacent sibling
* A ~ B selects all the adjacent siblings
* A > B selects direct children of an element
* :fist-child Select a first child element inside of another element
* :only-child Select an element that are the only element inside of another one.
* :last-child Select the last element inside of another element
* *:nth-child(A)* Select an element by its order in another element.
* *:nth-last-child(A)* Select an element by its order in another element, counting from the back
* *:first-of-type* Select the first element of a specific type
* *:nth-of-type(A)* Selects a specific element based on its type and order in another element - or even or odd instances of that element.
* *:nth-of-type(An+B)* The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.
* *:only-of-type* Selects the only element of its type within another element.
* *:last-of-type* Select the last element of a specific type.
* *:empty* Selects elements that don't have any other elements inside of them.
* *:not(X)* Selects all elements that don't match the negation selector.
* *[attribute]* Select all elements that have a specific attribute.
* *A[attribute]* Select all elements that have a specific attribute.
* *[attribute="value"]* Select all elements that have a specific attribute value. Attribute selectors are case sensitive, each character must match exactly.
* *[attribute^="value"]* Select all elements with an attribute value that starts with specific characters.
* *[attribute$="value"]* Select all elements with an attribute value that ends with specific characters.
* *[attribute*="value"]* Select all elements with an attribute value that contains specific characters anywhere. A useful selector if you can identify a common pattern in things like class, href or src attributes.

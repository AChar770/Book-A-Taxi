# Book A Taxi (React Starter)

## Front-End Folder Structure

```text
book-a-taxi/
  index.html
  package.json
  src/
    components/
      Navbar.jsx
      Footer.jsx
    data/
      navLinks.js
      services.js
    pages/
      Home.jsx
      About.jsx
      Services.jsx
      Contact.jsx
      BookRide.jsx
    App.jsx
    main.jsx
    index.css
```

## Rubric Mapping

- Folder Structure and Homepage Generation
  - Structured hierarchy in `src/components`, `src/pages`, and `src/data`
  - Homepage script in `src/pages/Home.jsx`
- React Script Generation for Additional Pages
  - Added pages: `src/pages/About.jsx`, `src/pages/Services.jsx`, `src/pages/Contact.jsx`
  - Design consistency comes from shared shell and `src/index.css`
- Navigation Menu Update
  - Shared nav links in `src/data/navLinks.js`
  - Hyperlinked menu in `src/components/Navbar.jsx`
  - Route definitions in `src/App.jsx`
- Integration of the Booking Page
  - Booking page script in `src/pages/BookRide.jsx`
  - Linked in navbar and routed in `src/App.jsx`
- Form Validation Functionality
  - Validation logic in `src/pages/BookRide.jsx` for required fields, email, phone, and date
  - Inline error rendering and submission success state

## Run Locally

```bash
npm install
npm run dev
```

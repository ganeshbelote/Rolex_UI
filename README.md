# React Component Library README

This project is a collection of reusable React components designed to streamline the development of modern, interactive, and visually appealing user interfaces. Below is a comprehensive guide to each component, including its purpose, props, and usage examples based on the provided use case. These components are organized into categories such as buttons, forms, navigation, inputs, and more, making it easy to integrate them into your React application.

---

## Installation

To use these components in your project, follow these steps:

1. Create a new React project with Vite:
   ```bash
   npm create vite@latest
   ```

2. Set up Tailwind CSS by following the [official Tailwind CSS installation guide](https://tailwindcss.com/docs/guides/vite).

3. Install the required dependencies:

   ```bash
   npm install rolex_ui@latest react-router-dom
   ```

4. In your `main.jsx` or `main.tsx` file:

   * Import the Rolex UI stylesheet **above** your `index.css` import:

     ```jsx
     import 'rolex_ui/dist/index.css';
     import './index.css';
     ```
   * Wrap your `<App />` component with `<BrowserRouter>`:

     ```jsx
     import React from 'react';
     import ReactDOM from 'react-dom/client';
     import { BrowserRouter } from 'react-router-dom';
     import App from './App';
     import 'rolex_ui/dist/index.css';
     import './index.css';

     ReactDOM.createRoot(document.getElementById('root')).render(
       <BrowserRouter>
         <App />
       </BrowserRouter>
     );
     ```

5. Import and use the desired components in your application:

   ```jsx
   import { BasicBtn, RegisterForm, NavigationMenu } from 'rolex_ui';
   ```

6. Use the components in your JSX/TSX files as described in the documentation.

---

## Screenshot

![Component Library Screenshot](https://github.com/ganeshbelote/My-React-Component-Library/blob/main/src/assets/screenshot.png?raw=true)

---

## Table of Contents
1. [Installation](#installation)
2. [Components Overview](#components-overview)
   - [Buttons](#buttons)
     - [BasicBtn](#basicbtn)
     - [LoadingBtn](#loadingbtn)
     - [PrevBtn](#prevbtn)
     - [NextBtn](#nextbtn)
     - [RoundedBtn](#roundedbtn)
     - [ColoredBtn](#coloredbtn)
     - [ExpandableBtn](#expandablebtn)
     - [Slider](#slider)
   - [Tabs](#tabs)
     - [InfoTab](#infotab)
     - [Tab](#tab)
   - [Input Fields](#input-fields)
     - [BasicInp](#basicinp)
     - [PasswordInp](#passwordinp)
     - [SearchBar](#searchbar)
   - [Auth Forms](#auth-forms)
     - [RegisterForm](#registerform)
     - [LoginForm](#loginform)
   - [Navigation](#navigation)
     - [NavBar](#navbar)
     - [TabBar](#tabbar)
     - [NavigationMenu](#navigationmenu)
     - [MenuBtn](#menubtn)
   - [Checkbox](#checkbox)
   - [Breadcrumb](#breadcrumb)
   - [Accordion](#accordion)
   - [Tooltip](#tooltip)
   - [Card](#card)
   - [Select Option](#select-option)
     - [Select](#select)
     - [Option](#option)
   - [Toast Messages](#toast-messages)
     - [Toast](#toast)
   - [Loader](#loader)
     - [Progressbar](#progressbar)
     - [IndeterminateBar](#indeterminatebar)
     - [VideoLoader](#videoloader)
     - [BarLoader](#barloader)
3. [Types](#types)
   - [userType](#usertype)
   - [MenuOptionType](#menuoptiontype)
4. [Usage Example](#usage-example)
5. [Contributing](#contributing)
6. [License](#license)

---

## Components Overview

### Buttons

#### BasicBtn
A simple button with customizable content and shadow.

- **Props**:
  - `Content` (string): The text or content to display on the button.
  - `Shadow` (boolean): Whether to apply a shadow effect.
  - `onClick` (function): Callback function triggered on button click.
- **Usage**:
  ```jsx
  <BasicBtn Content="Click me" Shadow={true} onClick={() => console.log('basic')} />
  ```

#### LoadingBtn
A button that displays a loading state, useful for async operations.

- **Props**:
  - `Border` (boolean): Whether to display a border.
- **Usage**:
  ```jsx
  <LoadingBtn Border={true} />
  ```

#### PrevBtn
A button styled for "previous" navigation.

- **Props**:
  - `onClick` (function): Callback function triggered on click.
- **Usage**:
  ```jsx
  <PrevBtn onClick={() => console.log('prev')} />
  ```

#### NextBtn
A button styled for "next" navigation.

- **Props**:
  - `onClick` (function): Callback function triggered on click.
- **Usage**:
  ```jsx
  <NextBtn onClick={() => console.log('next')} />
  ```

#### RoundedBtn
A rounded button with an optional icon.

- **Props**:
  - `Src` (string): Path to the SVG icon.
  - `Size` (string): Size of the button (`small`, `medium`, `large`).
  - `onClick` (function): Callback function triggered on click.
- **Usage**:
  ```jsx
  <RoundedBtn Src={penSvg} Size="large" onClick={() => console.log('rounded')} />
  ```

#### ColoredBtn
A customizable button with color, animation, shadow, and border options.

- **Props**:
  - `Animated` (boolean): Whether to apply animation.
  - `Shadow` (boolean): Whether to apply a shadow.
  - `Border` (boolean): Whether to display a border.
  - `Content` (string): Button text or content.
  - `Color` (string): Button color (e.g., `blue`, `red`).
  - `onClick` (function): Callback function triggered on click.
- **Usage**:
  ```jsx
  <ColoredBtn Animated={true} Shadow={true} Border={true} Content="Click me" Color="blue" onClick={() => console.log('colored')} />
  ```

#### ExpandableBtn
A button that can expand to reveal additional content, often used in navigation.

- **Props**:
  - `onToggle` (function): Callback function triggered when the button toggles (receives `active` boolean).
  - `NavIcon` (string): Icon name for navigation.
  - `Content` (string): Button content.
  - `Color` (string): Text/icon color.
  - `BackgroundColor` (string): Background color.
  - `Border` (boolean): Whether to display a border.
  - `Shadow` (boolean): Whether to apply a shadow.
  - `to` (string, optional): Link destination for navigation.
- **Usage**:
  ```jsx
  <ExpandableBtn
    onToggle={(active) => console.log('animated' + active)}
    NavIcon="Home"
    Content="Accusantium"
    Color="blue"
    Border={true}
    BackgroundColor="black"
    Shadow={true}
  />
  ```

#### Slider
A toggleable slider component with customizable color.

- **Props**:
  - `Color` (string): Color of the slider (e.g., `#2877F0`).
  - `onToggle` (function): Callback triggered when the slider toggles (receives `value` boolean).
- **Usage**:
  ```jsx
  <Slider Color="#2877F0" onToggle={(value) => console.log(value)} />
  ```

### Tabs

#### InfoTab
A tab component for displaying information with a link, heading, and description.

- **Props**:
  - `Href` (string): Link destination.
  - `Border` (boolean): Whether to display a border.
  - `Shadow` (boolean): Whether to apply a shadow.
  - `Heading` (string): Tab heading.
  - `Description` (string): Tab description.
- **Usage**:
  ```jsx
  <InfoTab
    Href="/about"
    Border={true}
    Shadow={true}
    Heading="Heading"
    Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium velit ratione, voluptate dicta debitis laboriosam distinctio soluta maxime blanditiis nemo molestiae veritatis illum ducimus minima eveniet nihil est cupiditate."
  />
  ```

#### Tab
A tab component that renders multiple tabs and handles click events.

- **Props**:
  - `Tabs` (array): List of tab names or values.
  - `onClick` (function): Callback function triggered on tab click (receives event).
- **Usage**:
  ```jsx
  <Tab
    Tabs={['Ganesh', 'My self ganesh belote', 'q', '123']}
    onClick={(e) => console.log(e.currentTarget.value, e.currentTarget.textContent)}
  />
  ```

### Input Fields

#### BasicInp
A basic input field with customizable appearance.

- **Props**:
  - `Shadow` (boolean): Whether to apply a shadow.
  - `Corner` (string): Corner style (`pill`, `rounded`, etc.).
  - `placeholder` (string): Placeholder text.
  - `onChange` (function): Callback function triggered on input change.
- **Usage**:
  ```jsx
  <BasicInp
    Shadow={false}
    Corner="pill"
    placeholder="username"
    onChange={(e) => console.log(e.target.value)}
  />
  ```

#### PasswordInp
A password input field with toggleable visibility.

- **Props**:
  - `Corner` (string): Corner style (`rounded`, etc.).
  - `Placeholder` (boolean): Whether to show the placeholder.
  - `placeholder` (string): Placeholder text.
  - `onChange` (function): Callback function triggered on input change.
- **Usage**:
  ```jsx
  <PasswordInp
    Corner="rounded"
    Placeholder={true}
    placeholder="jgjdsh"
    onChange={(e) => console.log(e.target.value)}
  />
  ```

#### SearchBar
A search input field with customizable styling.

- **Props**:
  - `Corner` (string): Corner style (`pill`, etc.).
  - `onChange` (function): Callback function triggered on input change.
- **Usage**:
  ```jsx
  <SearchBar Corner="pill" onChange={(e) => console.log(e.target.value)} />
  ```

### Auth Forms

#### RegisterForm
A form for user registration with fields for username, email, and password.

- **Props**:
  - `setFormData` (function): Callback to update form data (receives `userType`).
  - `isLoading` (boolean): Whether the form is in a loading state.
  - `Navigate` (string): URL to navigate to after submission.
- **Usage**:
  ```jsx
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
  <RegisterForm
    setFormData={setRegisterData}
    isLoading={isLoading}
    Navigate="/login"
  />
  ```

#### LoginForm
A form for user login with fields for email and password.

- **Props**:
  - `setFormData` (function): Callback to update form data (receives `userType`).
  - `isLoading` (boolean): Whether the form is in a loading state.
- **Usage**:
  ```jsx
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  <LoginForm setFormData={setLoginData} isLoading={isLoading} />
  ```

### Navigation

#### NavBar
A navigation bar that supports a menu with multiple options.

- **Props**:
  - `Menu` (MenuOptionType[]): Array of menu options (see [MenuOptionType](#menuoptiontype)).
  - `onToggle` (function): Callback triggered when the menu toggles (receives `isActive` boolean).
- **Usage**:
  ```jsx
  <NavBar
    Menu={menuOptions}
    onToggle={(isActive) => console.log('Menu active from navbar:', isActive)}
  />
  ```

#### TabBar
A bar for rendering tab-like navigation buttons.

- **Props**:
  - Children: Typically `ExpandableBtn` components.
- **Usage**:
  ```jsx
  <TabBar>
    <ExpandableBtn to="/" NavIcon="Home" Content="Home" Color="black" BackgroundColor="white" />
    <ExpandableBtn to="/about" NavIcon="About" Content="About" Color="black" BackgroundColor="white" />
    <ExpandableBtn to="/contact" NavIcon="Contact" Content="Contact" Color="black" BackgroundColor="white" />
    <ExpandableBtn to="/profile" NavIcon="Profile" Content="Profile" Color="black" BackgroundColor="white" />
    <ExpandableBtn to="/settings" NavIcon="Settings" Content="Settings" Color="black" BackgroundColor="white" />
  </TabBar>
  ```

#### NavigationMenu
A menu component for rendering navigation options.

- **Props**:
  - `Hidden` (boolean): Whether the menu is hidden by default.
  - `className` (string): Custom CSS class for styling.
  - `Menu` (MenuOptionType[]): Array of menu options (see [MenuOptionType](#menuoptiontype)).
- **Usage**:
  ```jsx
  <NavigationMenu
    Hidden={false}
    className="w-fit rounded-md bg-zinc-600"
    Menu={menuOptions}
  />
  ```

#### MenuBtn
A button to toggle a menu's visibility.

- **Props**:
  - `onToggle` (function): Callback triggered when the menu toggles (receives `isActive` boolean).
- **Usage**:
  ```jsx
  <MenuBtn onToggle={(isActive) => console.log('Menu active:', isActive)} />
  ```

### Checkbox

#### Checkbox
A customizable checkbox or todo-style checkbox.

- **Props**:
  - `Size` (string): Size of the checkbox (`small`, `medium`, etc.).
  - `Type` (string, optional): Type of checkbox (`todo` for todo-style).
  - `onToggle` (function): Callback triggered when the checkbox toggles (receives `active` or `done` boolean).
  - `For` (string): Label or ID for the checkbox.
- **Usage**:
  ```jsx
  <Checkbox
    Size="small"
    onToggle={(active) => console.log(active)}
    For="Myself Ganesh Digambar Belote I am from Parner District Ahilyanagar"
  />
  <Checkbox
    Type="todo"
    onToggle={(done) => console.log(done)}
    For="Myself Ganesh Digambar Belote I am from Parner District Ahilyanagar"
  />
  ```

### Breadcrumb

#### Breadcrumb
A component for displaying a breadcrumb navigation trail.

- **Props**: None (assumes dynamic generation based on routing).
- **Usage**:
  ```jsx
  <Breadcrumb />
  ```

### Accordion

#### Accordion
A collapsible component for displaying content.

- **Props**:
  - `Heading` (string): Accordion heading.
  - `Description` (string): Accordion content.
  - `Border` (boolean): Whether to display a border.
  - `Color` (string): Text color.
  - `BackgroundColor` (string): Background color.
- **Usage**:
  ```jsx
  <Accordion
    Heading="Ganesh Belote, I am from Devibhoyare"
    Description="Myself Ganesh Belote, I am from Devibhoyare Taluka Parner District Ahilyanagar."
    Border={true}
    Color="white"
    BackgroundColor="black"
  />
  ```

### Tooltip

#### Tooltip
A component that displays a tooltip on hover or click.

- **Props**:
  - `Content` (string): Tooltip content.
- **Usage**:
  ```jsx
  <Tooltip Content="Hey Buddy !" />
  ```

### Card

#### Card
A card component for displaying content with an image, heading, and description.

- **Props**:
  - `Src` (string): Path to the image.
  - `Heading` (string): Card heading.
  - `Description` (string): Card description.
  - `Date` (string): Date string to display.
- **Usage**:
  ```jsx
  <Card
    Src={dummyImg}
    Heading="Ganesh Belote"
    Description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolores, voluptatibus reiciendis aut ex provident exercitationem distinctio. Laboriosam architecto expedita natus fugiat molestias inventore omnis beatae ipsum, tempore quam vero reiciendis excepturi sapiente eum sint ea similique dolorem odio dolorum."
    Date={String(Date.now())}
  />
  ```

### Select Option

#### Select
A dropdown select component.

- **Props**:
  - `Title` (string, optional): Title or label for the select.
  - `onChange` (function): Callback triggered on selection change.
  - Children: `Option` components.
- **Usage**:
  ```jsx
  <Select
    Title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ad reprehenderit dolor harum omnis mollitia ex magnam recusandae eligendi molestiae."
    onChange={(e) => console.log(e.target.value)}
  >
    <Option value="male">Male</Option>
    <Option value="female">Female</Option>
    <Option value="others">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ad reprehenderit dolor harum omnis mollitia ex magnam recusandae eligendi molestiae.</Option>
  </Select>
  ```

#### Option
An option for the `Select` component.

- **Props**:
  - `value` (string): Value of the option.
  - Children: Option text or content.
- **Usage**:
  ```jsx
  <Option value="male">Male</Option>
  ```

### Toast Messages

#### Toast
A toast notification component with customizable types (success, info, warning, error).

- **Props**:
  - `duration` (number): Duration in milliseconds for the toast to remain visible.
- **Methods**:
  - `toast.success(message)`: Display a success toast.
  - `toast.info(message)`: Display an info toast.
  - `toast.warning(message)`: Display a warning toast.
  - `toast.error(message)`: Display an error toast.
- **Usage**:
  ```jsx
  <Toast duration={500} />
  <BasicBtn Content="Success" onClick={() => toast.success('Chaltay ...')} />
  <BasicBtn Content="Info" onClick={() => toast.info('Chaltay ...')} />
  <BasicBtn Content="Warning" onClick={() => toast.warning('Chaltay ...')} />
  <BasicBtn Content="Error" onClick={() => toast.error('Chaltay ...')} />
  ```

### Loader

#### Progressbar
A progress bar loader with a defined progress value.

- **Props**:
  - `progress` (number): Progress value (0-100).
- **Usage**:
  ```jsx
  <Loader.Progressbar progress={100} />
  ```

#### IndeterminateBar
An indeterminate loading bar that runs continuously.

- **Props**: None.
- **Usage**:
  ```jsx
  <Loader.IndeterminateBar />
  ```

#### VideoLoader
A loader styled for video loading with customizable size.

- **Props**:
  - `size` (string): Size of the loader (`sm`, `md`, `lg`).
- **Usage**:
  ```jsx
  <Loader.VideoLoader size="sm" />
  ```

#### BarLoader
A simple bar loader for general loading states.

- **Props**: None.
- **Usage**:
  ```jsx
  <Loader.BarLoader />
  ```

---

## Types

### userType
A TypeScript interface for user data in forms.

```typescript
interface userType {
  username?: string;
  email: string;
  password: string;
}
```

### MenuOptionType
A TypeScript interface for navigation menu options.

```typescript
interface MenuOptionType {
  Option: string;
  Content: {
    Href?: string;
    Heading: string;
    Description: string;
  }[];
}
```

---

## Usage Example

Here’s an example of how to combine multiple components in a React application:

```jsx
import { useState } from 'react';
import { BasicBtn, RegisterForm, NavigationMenu, Toast, Loader } from './components';
import { menuOptions } from './menuOptions'; // Assume menuOptions is defined

function App() {
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="p-6 text-white flex flex-col gap-5">
      <NavigationMenu Menu={menuOptions} Hidden={false} className="bg-zinc-600" />
      <RegisterForm setFormData={setRegisterData} isLoading={isLoading} Navigate="/login" />
      <BasicBtn Content="Show Toast" onClick={() => toast.success("Welcome!")} />
      <Toast duration={500} />
      <Loader.Progressbar progress={50} />
    </div>
  );
}

export default App;
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-component`).
3. Make your changes and commit (`git commit -m 'Add new component'`).
4. Push to the branch (`git push origin feature/new-component`).
5. Open a Pull Request.

Please ensure your code follows the project’s coding standards and includes appropriate documentation.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

---

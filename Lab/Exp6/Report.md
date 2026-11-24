# Experiment 6: Registration Form – Client-Side Validation

**Client-Side Scripts for Form Validation Using JavaScript**

## 1. Introduction and Objective

Form validation checks that the data entered by a user is complete and correct before it is accepted. Client-side validation performs these checks in the browser using JavaScript, allowing users to receive instant feedback without waiting for the server.

This experiment develops a registration form that validates every field using JavaScript.

**Objectives:**

- Write client-side scripts to validate form input using JavaScript.
- Use regular expressions to check formats such as email and mobile numbers.
- Display clear error messages next to each field.
- Validate fields while the user types, when a field loses focus, and again during form submission.
- Prevent the form from being submitted while any field contains invalid data.

## 2. Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| Structure | HTML5 | Form fields, labels and error placeholders |
| Styling | CSS3 | Layout, valid/invalid colours, light and dark theme |
| Logic | JavaScript (ES6) | Validation rules, events and DOM updates |
| Tools | VS Code, Chrome / Edge DevTools | Writing and testing the code |

## 3. How to Run

1. Keep `index.html` inside a folder named `exp6-form-validation`.
2. Open the file in Google Chrome or Microsoft Edge by double-clicking it, or use the Live Server extension in VS Code.
3. No additional installation or server is required.

## 4. Project Structure

```text
exp6-form-validation/
│
├── index.html    # HTML, CSS and JavaScript in one file
└── REPORT.md     # Experiment report
```

## 5. Working of the Application

### 5.1 Form Fields and Validation Rules

| Field | Validation Rule | Example Error Message |
|---|---|---|
| Full Name | Required; 3 to 50 characters; letters, spaces, `.`, `'` and `-` only | Name can contain only letters and spaces. |
| Email | Required; must match the pattern `name@domain.tld` | Enter a valid email, e.g. name@example.com. |
| Mobile Number | Required; exactly 10 digits; starts with 6, 7, 8 or 9 | Mobile number must be exactly 10 digits. |
| Date of Birth | Required; cannot be in the future; minimum age 18 | You must be at least 18 years old. |
| Gender | One radio button must be selected | Please select a gender. |
| Country | A country must be selected from the list | Please select a country. |
| Password | Minimum 8 characters; uppercase, lowercase, digit and special character; no spaces | Add at least one uppercase letter. |
| Confirm Password | Required; must match the password | Passwords do not match. |
| Terms | Checkbox must be selected | You must accept the terms and conditions. |

### 5.2 Application Flow

```text
User types / leaves a field
          |
          v
validateField(id) --> Validators[id](value)
          |
          v
Returns empty string (valid) or error message
          |
          v
setState(id, message)
          |
          v
Displays red error / green border


User clicks Register
          |
          v
Submit event --> preventDefault()
          |
          v
Validate ALL fields
          |
     +----+-----------------+
     |                      |
 Any invalid             All valid
     |                      |
     v                      v
Focus first invalid     showSuccess()
field                   Summary card displayed
```

### 5.3 How Each Feature Works

**1. Validators Object**

All validation rules are stored in one object named `Validators`. Each function accepts the field's value and returns an error message or an empty string when the value is valid.

Keeping validation rules separate from the page code makes them easier to read and test.

```javascript
phone(v) {
    v = v.replace(/[\s-]/g, "");

    if (!v) return "Mobile number is required.";
    if (!/^\d+$/.test(v)) return "Mobile number can contain digits only.";
    if (v.length !== 10) return "Mobile number must be exactly 10 digits.";
    if (!/^[6-9]/.test(v)) return "Mobile number must start with 6, 7, 8 or 9.";

    return "";
}
```

**2. Regular Expressions**

Regular expressions are used to check input formats.

- Email: `^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$`
- Digits only: `/^\d+$/`
- Uppercase letter: `/[A-Z]/`
- Lowercase letter: `/[a-z]/`
- Digit: `/\d/`
- Special character: `/[^A-Za-z0-9]/`

**3. When Validation Runs**

A field is validated when it loses focus using the `blur` event. After that, it is re-validated on every keystroke using the `input` event.

This allows error messages to disappear as soon as the user corrects the input and avoids displaying errors on fields that the user has not touched.

**4. Submit Handling**

The form uses the `novalidate` attribute to disable the browser's default validation pop-ups so that JavaScript can control the error messages.

During submission:

- `e.preventDefault()` stops the default form submission.
- Every field is validated.
- Focus moves to the first invalid field.
- If all fields are valid, the success card is displayed.

**5. Password Strength Meter**

The `passwordScore()` function gives a score from 0 to 4 based on password length, uppercase and lowercase letters, digits and special characters.

The strength bar displays one of four levels:

- Weak
- Fair
- Good
- Strong

**6. Confirm Password**

Whenever the password changes, the confirm password field is checked again. This ensures that a mismatch is detected even if the user edits the original password after confirming it.

**7. Date of Birth**

The `max` attribute is set to the current date to prevent selecting a future date. The user's age is calculated using the date of birth, including month and day comparisons.

**8. Show / Hide Password**

A button switches the password input type between `password` and `text`, allowing users to view or hide their entered password.

**9. Safe Output**

The success summary is created using `textContent` instead of `innerHTML`. This prevents user-entered content from being interpreted as HTML or a script.

The password is never displayed in the success card.

## 6. Testing

| Test | Expected Result |
|---|---|
| Click Register with an empty form | Every field displays its error; focus moves to Full Name |
| Full name `Al` | Name must be at least 3 characters. |
| Full name `Sak123` | Name can contain only letters and spaces. |
| Email `abc` or `a@b` | Invalid email message |
| Email `sakshi@example.com` | Valid input with green border |
| Mobile `12345` | Mobile number must be exactly 10 digits. |
| Mobile `5123456789` | Mobile number must start with 6, 7, 8 or 9. |
| Mobile `98765 43210` | Valid; spaces are ignored |
| Date of birth in 2015 | You must be at least 18 years old. |
| Date of birth in the future | Date picker blocks it; error message if typed |
| Password `abcdefgh` | Add at least one uppercase letter. |
| Password `Abcd@1234` | Valid; meter shows Strong |
| Different confirm password | Passwords do not match. |
| Change password after confirming | Confirm password field is re-checked automatically |
| Terms not selected | You must accept the terms and conditions. |
| All fields valid, click Register | Success card appears with a summary and no password |
| Click Reset | Form, error messages and strength meter are cleared |

**Automated Testing:** The 30 validator test cases, including valid and invalid values for each field, were run in Node.js, and all 30 tests passed.

### Output

Insert screenshots of the following application states:

1. Empty form with validation errors.
2. Partially completed and valid form fields.
3. Password strength meter.
4. Successful registration card.

## 7. Problems Faced and Solutions

| Problem | Cause | Solution |
|---|---|---|
| Browser showed its own error pop-ups | HTML5 built-in validation was active | Added `novalidate` to the form so JavaScript controls the messages |
| Page reloaded on submit and data disappeared | Default form submission | Used `e.preventDefault()` in the submit handler |
| Errors appeared before the user typed anything | Validation ran too early | Validate on `blur` first, then on `input` only for fields already touched |
| Confirm password remained valid after changing the password | Only the confirm field was checked | Re-validate the confirm password whenever the original password changes |
| Age was incorrect around the birthday | Only the year was subtracted | Compared the month and day as well |
| Radio group error could not be attached to one input | Radio buttons share the same name | Validated the group using the checked radio button and displayed one shared message |

*Note: Keep only the problems that you actually faced during implementation.*

## 8. Limitations and Future Scope

### Current Limitations

- Client-side validation can be bypassed by disabling JavaScript or sending a request directly. Therefore, it should never be the only validation method.
- The form does not send data to a server; it only displays a success summary.
- The country list is short and fixed.
- Email format is checked, but the actual existence of the email address is not verified.

### Possible Improvements

- Connect the form to a server using Node.js and Express and repeat all validation checks on the server.
- Check whether an email or username is already registered using AJAX.
- Add more fields, such as address and PIN code, and use the HTML5 `pattern` attribute as a fallback.
- Add multilingual error messages and screen-reader announcements for validation errors.

## 9. Conclusion

This experiment developed a registration form validated entirely through client-side JavaScript. Validation rules for name, email, mobile number, date of birth, gender, country, password and terms were implemented using separate functions and regular expressions wherever required.

Validation runs when a field loses focus, while the user types and during form submission. The form is prevented from submitting until every field is valid. Additional features include a password strength meter and a show/hide password option.

The experiment demonstrated that client-side validation improves user experience by providing immediate feedback. However, it must always be combined with server-side validation to ensure proper security.
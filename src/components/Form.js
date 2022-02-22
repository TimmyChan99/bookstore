import React from 'react';

const Form = () => (
  <>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" />
      <select name="categorie" id="categorie">
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </>
);
export default Form;

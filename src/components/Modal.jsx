import React from "react";
import '../App.css'

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="container">
        <form>
          <label htmlFor="id">Виберіть групу:</label>
          <select name="Групи" placeholder="Групи" id="id">
            <option value="p41">P-41</option>
            <option value="p42">P-42</option>
            <option value="p31">P-31</option>
            <option value="p32">P-32</option>
            <option value="p21">P-21</option>
          </select>
          <br />
          <label htmlFor="id">Виберіть день:</label>
          <select name="Групи" placeholder="День" id="days">
            <option value="Monday">Понеділок</option>
            <option value="Tuesday">Вівторок</option>
            <option value="Wednesday">Середа</option>
            <option value="Thursday">Четвер</option>
            <option value="Friday">П'ятниця</option>
          </select>
          <br />

          {/* Number 1 */}
          <label htmlFor="subj1">1 Пара </label>
          <input id="subj1" type="text" />
          <button type='submit'>Оновити поле</button>
          <br />
          {/* Number 2 */}
          <label htmlFor="subj2">2 Пара </label>
          <input id="subj2" type="text" />
          <button type='submit'>Оновити поле</button>
          <br />
          {/* Number 3 */}
          <label htmlFor="subj3">3 Пара </label>
          <input id="subj3" type="text" />
          <button type='submit'>Оновити поле</button>
          <br />
          {/* Number 4 */}
          <label htmlFor="subj4">4 Пара </label>
          <input id="subj4" type="text" />
          <button type='submit'>Оновити поле</button>
          <br />
          {/* Number 5 */}
          <label htmlFor="subj5">5 Пара </label>
          <input id="subj5" type="text" />
          <button type='submit'>Оновити поле</button>
          <br />
          {/* Number 6 */}
          <label htmlFor="subj6">6 Пара </label>
          <input id="subj6" type="text" />
          <button type='submit'>Оновити поле</button>
          <br />

          <button type="submit">Оновити розклад</button>
          <button type="button" onClick={onClose}>
            Скасувати
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

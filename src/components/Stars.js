function Stars(props) {
  return (
    <div>
      <div className="dropdown mt-3">
        <label>Rating</label>
        <select onChange={props.passedFromForm}>
          <option value="★">★</option>
          <option value="★★">★★</option>
          <option value="★★★">★★★</option>
          <option value="★★★★">★★★★</option>
          <option value="★★★★★">★★★★★</option>
        </select>
      </div>
    </div>
  );
}

export default Stars;

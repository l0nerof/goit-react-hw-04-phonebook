import PropTypes from 'prop-types';

function Filter({ filter, handleChange }) {
  return (
    <label>
      Filter contacts by name:
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        style={{ marginLeft: 10 }}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;

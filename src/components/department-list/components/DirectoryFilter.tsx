const DirectoryFilter = () => {
  return (
    <select className="form-select">
      <option value="General Manager">General Manager</option>
      <option value="Board of Directors">Board of Directors</option>
      <option value="Office Coordinator">Office Coordinator</option>
      <option value="Parks and Facility Manager (Maintenance)">
        Parks and Facility Manager (Maintenance)
      </option>
      <option value="Daycare Supervisor">Daycare Supervisor</option>
      <option value="Facilities Coordinator (Rentals)">
        Facilities Coordinator (Rentals)
      </option>
      <option value="Recreation & Events Coordinator">
        Recreation & Events Coordinator
      </option>
    </select>
  );
};

export default DirectoryFilter;

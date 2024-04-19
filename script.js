document.addEventListener('DOMContentLoaded', () => {
  const incidentForm = document.getElementById('incident-form');
  const incidentList = document.getElementById('incident-list');


  const submitIncident = (event) => {
    event.preventDefault();

    const type = document.getElementById('incident-type').value;
    const location = document.getElementById('incident-location').value;
    const description = document.getElementById('incident-description').value;


    const incident = {
      type,
      location,
      description
    };


    addIncidentToList(incident);


    incidentForm.reset();
  };


  const addIncidentToList = (incident) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Type:</strong> ${incident.type}<br>
      <strong>Location:</strong> ${incident.location}<br>
      <strong>Description:</strong> ${incident.description}
    `;
    incidentList.appendChild(listItem);
  };


  incidentForm.addEventListener('submit', submitIncident);
});

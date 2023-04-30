function companyUsers(data) {
  let companiesInfo = {};
  for (let line of data) {
    [company, employeeId] = line.split(" -> ");
    if (!companiesInfo.hasOwnProperty(company)) {
      companiesInfo[company] = [];
      companiesInfo[company].push(employeeId);
    } else {
      if (!companiesInfo[company].includes(employeeId)) {
        companiesInfo[company].push(employeeId);
      }
    }
  }
  let sortedCompanies = Object.keys(companiesInfo).sort((a, b) =>
    a.localeCompare(b)
  );
  for (let currentCompany of sortedCompanies) {
    console.log(currentCompany);
    companiesInfo[currentCompany].forEach((employee) => {
      console.log(`-- ${employee}`);
    });
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

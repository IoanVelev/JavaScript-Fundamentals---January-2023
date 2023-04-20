function extractEmails(input) {
  let text = input.split(" ");
  let regex =
    /(?<user>^[a-z0-9]+[-._]?[a-z0-9]+)(?<host>@([a-z]+[-]?[a-z]+){1,}([.][a-z]+){1,})/gm;
  for (let el of text) {
    if (el.match(regex)) {
      let validEmail = el.match(regex);
      console.log(validEmail.join(""));
    }
  }
}
extractEmails("Please contact us at: support@github.com.");

extractEmails(
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information."
);

extractEmails(
  "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de."
);

extractEmails(
  "--123@gmail.com, …@mail.bg, .info@info.info, _steve@yahoo.cn, mike@helloworld, mike@.unknown.soft., s.johnson@invalid-."
);

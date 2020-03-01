import routes from "../helpers/routes";

describe("Exercise explorer", () => {

  describe("Existing exercises list", () => {
    describe("by default, when the user navigates to the Exercise Explorer", () => {
      it("sees all the existing exercises", () => {});
    });
  });

  describe("Create exercise", () => {
    describe("when the user attempts to create a valid exercise", () => {
      it("should show the loading spinner", () => {
        cy.visit(routes.exerciseExplorer);
      });
    });
    describe("when the user attempts to create an invalid exercise", () => {
      it("should see the loading spinner", () => {
        cy.visit(routes.exerciseExplorer);
      });
      it("should show an error", () => {});
      it("clears the form to create the exercise", () => {});
    });
  });

  describe("Delete exercise", () => {
    describe("when the user deletes an exercise", () => {
      it("sees all the existing exercises", () => {});
    });
  });

});

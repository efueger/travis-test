import * as chai from "chai";
// A import {GraphInterface, Project} from "cubitt-graph";
import {CQRSGraph} from "./../CQRSGraph";

let expect = chai.expect;

describe("Empty graph", () => {
	let subject: CQRSGraph;

	beforeEach(function () {
		subject = new CQRSGraph();
	});

	describe("GetGraph", () => {
		it("should correctly return an empty CQRSGraph", (done) => {
			let result = subject.GetGraph().serialize();
			let expected = {
				"models": {},
				"nodes": {},
				"edges": {},
				"connectors": {}
			};
			expect(result).to.deep.equal(expected);
			done();
		});
	});

	describe("GetVersion", () => {
		it("should return version 0", (done) => {
			let result = subject.GetVersion();
			expect(result).to.equal(0);
			done();
		});
	});

});
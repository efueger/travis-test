// A import * as Commands from "cubitt-commands";
// A import * as Events from "cubitt-events";
import {GraphInterface, Project} from "cubitt-graph";

export class CQRSGraph {

	private _graph: GraphInterface;
	private _version: number;

	// A private _rollbackGraph: Object;
	// A private _rollbackVersion: number;

	constructor(graph?: GraphInterface, version?: number) {
		if (typeof(graph) === "undefined" || graph === null) {
			this._graph = new Project();
			this._version = 0;
		} else {
			this._graph = graph;
			this._version = version;
		}
	}

	public GetGraph(): GraphInterface {
		return this._graph.deserialize(this._graph.serialize());
	}

	public GetVersion(): number {
		return this._version;
	}
}
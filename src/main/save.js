
// Get the backup of a required canvas from the localStorage of the browser 
function restoreBackup(localIndex) {

	nodes = [];
	links = [];

	if(!localStorage || !JSON) {
		return;
	}

	try{
		// Convert a JSON, which has the structure of an required automata, to an object 
		var backup = JSON.parse(localStorage['fsm'+localIndex]);
		// Create the nodes of an automata based on the backup
		for(var i = 0; i < backup.nodes.length; i++) {
			var backupNode = backup.nodes[i];
			var node = new Node(backupNode.x, backupNode.y);
			node.isAcceptState = backupNode.isAcceptState;
			node.text = backupNode.text;
			nodes.push(node);
		}
		// Create the links of an automata based on the backup
		for(var i = 0; i < backup.links.length; i++) {
			var backupLink = backup.links[i];
			var link = null;
			if(backupLink.type == 'SelfLink') {
				link = new SelfLink(nodes[backupLink.node]);
				link.anchorAngle = backupLink.anchorAngle;
				link.text = backupLink.text;
			} else if(backupLink.type == 'StartLink') {
				link = new StartLink(nodes[backupLink.node]);
				link.deltaX = backupLink.deltaX;
				link.deltaY = backupLink.deltaY;
				link.text = backupLink.text;
			} else if(backupLink.type == 'Link') {
				link = new Link(nodes[backupLink.nodeA], nodes[backupLink.nodeB]);
				link.parallelPart = backupLink.parallelPart;
				link.perpendicularPart = backupLink.perpendicularPart;
				link.text = backupLink.text;
				link.lineAngleAdjust = backupLink.lineAngleAdjust;
			}
			if(link != null) {
				links.push(link);
			}
		}
		return backup;
	} catch(e) {
		return flag = '';
	}
}

// Save a required canvas in the localStorage of the browser 
function saveBackup(index) {
	
	if(!localStorage || !JSON) {
		return;
	}

	//Create an object named backup, which has the 'nodes' and 'links' arrays in its structure
	var backup = {
		'nodes': [],
		'links': [],
	};
	
	//Fill the 'nodes' array, which is a part of the structure of the 'backup' object
	for(var i = 0; i < nodes.length; i++) {
		var node = nodes[i];
		//Create an object named backupNode, which has four variables in its structure
		var backupNode = {
			'x': node.x,
			'y': node.y,
			'text': node.text,
			'isAcceptState': node.isAcceptState,
		};
		backup.nodes.push(backupNode);
	}

	//Fill the 'links' array, which is a part of the structure of the 'backup' object
	for(var i = 0; i < links.length; i++) {
		var link = links[i];
		var backupLink = null;
		if(link instanceof SelfLink) {
			//Create an object named backupLink, which represent a SelfLink
			backupLink = {
				'type': 'SelfLink',
				'node': nodes.indexOf(link.node),
				'text': link.text,
				'anchorAngle': link.anchorAngle,
			};
		} else if(link instanceof StartLink) {
			//Create an object named backupLink, which represent a StartLink
			backupLink = {
				'type': 'StartLink',
				'node': nodes.indexOf(link.node),
				'text': link.text,
				'deltaX': link.deltaX,
				'deltaY': link.deltaY,
			};
		} else if(link instanceof Link) {
			//Create an object named backupLink, which represent a Link
			backupLink = {
				'type': 'Link',
				'nodeA': nodes.indexOf(link.nodeA),
				'nodeB': nodes.indexOf(link.nodeB),
				'text': link.text,
				'lineAngleAdjust': link.lineAngleAdjust,
				'parallelPart': link.parallelPart,
				'perpendicularPart': link.perpendicularPart,
			};
		}

		if(backupLink != null) {
			backup.links.push(backupLink);
		}
	}

	localStorage['fsm'+index] = JSON.stringify(backup);
}

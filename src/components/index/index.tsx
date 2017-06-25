/**
 * resume index component.
 */
import * as React from 'react';
import { Basic } from '../basic';
import { Contact } from '../contact';
import { Cover } from '../cover';
import { Edu } from '../edu';
import { Header } from '../header';
import { Project } from '../project';
import { Skill } from '../skill';
import { Work } from '../work';
import './style.scss';

export class App extends React.Component {

	public render() {
		return (
			<div id="resume-app">
				<Header></Header>
				<Cover></Cover>
				<Basic></Basic>
				<Edu></Edu>
				<Work></Work>
				<Project></Project>
				<Skill></Skill>
				<Contact></Contact>
			</div>
		);
	}
}

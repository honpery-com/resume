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

const mock = {
	skills: [
		{
			description: '熟悉',
			name: 'HTML5',
			progress: 70,
		},
		{
			description: '熟悉',
			name: 'CSS3',
			progress: 50,
		},
		{
			description: '熟悉',
			name: 'JavaScript',
			progress: 30,
		},
		{
			description: '熟悉',
			name: 'ES6+',
			progress: 70,
		},
		{
			description: '熟悉',
			name: 'TypeScript',
			progress: 70,
		},
		{
			description: '熟悉',
			name: 'Angular2+',
			progress: 70,
		},
		{
			description: '熟悉',
			name: 'React',
			progress: 70,
		},
	],
};

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
				<Skill skills={ mock.skills }></Skill>
				<Contact></Contact>
			</div>
		);
	}
}

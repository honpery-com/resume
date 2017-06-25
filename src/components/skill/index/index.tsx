/**
 * skill component.
 */
import * as React from 'react';
import { Sec } from '../../common';
import { SkillProgress } from '../progress';
import './style.scss';

interface ISkill {
	name: string;
	description: string;
	progress: number;
}

interface IProps {
	skills: ISkill[];
}

const Color = [
	'#ff5c5c', // 红
	'#ffb60e', // 黄
	'#10e2f9', // 蓝
	'#3eff01', // 绿
	'#d304f7', // 紫
	'#4000ff', // 深蓝
];

export class Skill extends React.Component<IProps> {
	public render() {
		return (
			<Sec className="skill" title="技能" en_title="skill">
				<ul className="row col-8 offset-2 list-unstyled">
					{ this.props.skills.map((skill, index) =>
						<li key={ index } className="col-lg-2 col-md-3 col-sm-6 col-xs-1">
							<SkillProgress name={ skill.name }
								color={ Color[Math.floor(Math.random() * Color.length)] }
								progress={ skill.progress }></SkillProgress>
							<p className="description">{ skill.description }</p>
						</li>,
					) }
				</ul>
			</Sec>
		);
	}
}

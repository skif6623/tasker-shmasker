import React from "react";
import logo from "./logo.svg";
import "./App.css";

type EducationType = {
	school: string;
	college: string;
	university: string;
};

type WorkType = {
	first: string;
	second?: string;
	third: string;
};

type UserType = {
	name: string;
	age: number;
	education: EducationType;
};

type AdminType = {
	name: string;
	age: number;
	workexp: WorkType;
};

type GenericType<CustomType> = {
	name: string;
	age: number;
	experience: CustomType;
};

const Profile: GenericType<EducationType> = {
	name: "Roman",
	age: 29,
	experience: {
		school: "Berlogy",
		university: "Ternopil Ivan Puluy",
		college: "Kaluch Politechnical College",
	},
};

const Profile2: GenericType<WorkType> = {
	name: "Roman",
	age: 29,
	experience: {
		first: "Building",
		third: "Front End Developer",
		second: "Allo",
	},
};

type SummType = (a: number, b: number) => Array<string>;

const summ: SummType = (a: number, b: number) => {
	return (a * b).toString().split("");
};

console.log(summ(4, 12));

const initialState = {
	name: "Roman",
	age: 29,
	skills: ["html", "css", "js", "react"],
	address: {
		country: "Ukraine",
		city: "Kalush",
	},
};

type InitStateType = typeof initialState;

const user: InitStateType = {
	name: "Julia",
	age: 36,
	skills: ["html", "css"],
	address: {city: "Shidnytsya", country: "Ukraine"},
};

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;

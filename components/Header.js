import Link from "next/link";
import css from "../styles/header.scss";
import React, { useState } from "react";

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className={css.header + " " + (open ? css.open : null)}>
			<div className={"container " + css.container}>
				<Link href="/">
					<h3>
						<a>
							<img
								src="../static/images/rk.svg"
								alt="RK"
								className={css.logo}
							/>
							<span className={css.name}>Raymond Kneipp</span>
						</a>
					</h3>
				</Link>
				<div className={css.links + " " + (open ? css.open : null)}>
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/#about">
						<a>About Me</a>
					</Link>
					<Link href="/#projects">
						<a>My Projects</a>
					</Link>
					<Link href="/#contact">
						<a>Contact Me</a>
					</Link>
				</div>
				<button
					type="button"
					className={css.toggle}
					onClick={() => setOpen(!open)}
				>
					<div className={css.bar}></div>
					<div className={css.bar}></div>
					<div className={css.bar}></div>
				</button>
			</div>
		</header>
	);
};

export default Header;

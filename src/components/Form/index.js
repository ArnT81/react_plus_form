import React from 'react'
//	STYLES
import styles from './form.module.css'

export default function Form({ action, method, encType, children, handleSubmit, handleReset }) {
	return (
		<form
			className={styles.form}
			action={action}
			method={method}
			encType={encType}
			onReset={handleReset}
			onSubmit={handleSubmit}
		>
			{children}
			<div className={styles.buttoncontainer}>
				<input type='reset' value='Ångra' />
				<input type='submit' value='Skicka' />
			</div>
		</form>
	)
}
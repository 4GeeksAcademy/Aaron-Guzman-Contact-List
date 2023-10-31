const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				}
				


			]
		},
		actions: {

			
			createNewContact: async (newContact) => {
				try {
					const response = await fetch('https://playground.4geeks.com/apis/fake/contact', {
						method: "POST",
						body: JSON.stringify(newContact),
						headers: {
							'Content-Type': 'application/json'
						}
					});

					const data = await response.json();
					console.log('El contacto se creó correctamente', data);

				} catch (error) {
					console.log("No se pudo crear el nuevo contacto", error);
				}
			},

			updateContact: async (contact, idContact) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${idContact}`, {
						method: "PUT",
						body: JSON.stringify(contact), 
						headers: { 
							'Content-Type': 'application/json'
						}
					});
					if(!response.ok){
						throw new Error("El response ok vino en false")
					}

					const data = await response.json();
					console.log("El contacto se actualizó correctamente", data);


				} catch (error) {
					console.log("Hubo un error al actualizar el contacto", error);
				}
			},


			deleteContact: async (idContact) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${idContact}`, {
						method: "DELETE"
					})

					
					if(!response.ok){
						throw new Error("El response ok viene en false")
					}

					const data = await response.json();
					console.log("El contacto se eliminó correctamente", data)
				}

				catch(error) {
					console.log("Hubo un error al eliminar el contacto", error)
				}
			}
			
		}
		
		
	};
};

export default getState;


	// // Use getActions to call a function within a fuction
	// exampleFunction: () => {
	// 	getActions().changeColor(0, "green");
	// },
	// loadSomeData: () => {
	// 	/**
	// 		fetch().then().then(data => setStore({ "foo": data.bar }))
	// 	*/
	// },
	// changeColor: (index, color) => {
	// 	//get the store
	// 	const store = getStore();

	// 	//we have to loop the entire demo array to look for the respective index
	// 	//and change its color
	// 	const demo = store.demo.map((elm, i) => {
	// 		if (i === index) elm.background = color;
	// 		return elm;
	// 	});

	// 	//reset the global store
	// 	setStore({ demo: demo });
	// }
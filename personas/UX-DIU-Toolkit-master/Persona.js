/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Paco González Ruíz",
				Photo: "man.png",
				Quote: "El mareas",
				Age: 25,
				Occupation: "Dueño de diversas tiendas de Dropshipping",
				Family: "Lleva 4 años con su novia",
				Location: "Granada (Torrenueva)",
				Character: "Le gusta disfrutar el verano junto al mar",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Disfrutar del mar con su pareja", "Casarse con su pareja", "Escalar sus tiendas aun más para poder compras"],
				Frustrations: ["Le gusta el deporte, pero no encuentra tiempo para dedicarle", "Le gustaría pasar más tiempo con su novia, ya que le dedica demasiado tiempo a los negocios"],
				Bio: "Es de Cádiz y vino a Granada para llevar a cabo los negocios que mantiene hoy día junto su socio Tomás. Hace poco le ha surgido una oportunidad de trabajo en Dubai, donde tiene un posible comprador, de una de sus multiples tiendas. Aqui ha hecho buenos amigos y además de haber conocido a la que es su pareja y normalmente ser reunen para cumpleaños y a veces organizan viajes",
				Tech: [
					{ Name: "Marketing digital / Ads", Value: 5 },
					{ Name: "Gestión de tiendas online", Value: 5 },
					{ Name: "Negociación", Value: 4 },
					{ Name: "Organización del tiempo", Value: 2 }
				], 
                Contextos: "Lleva un tiempo agotado y quiere desconectar. Le gustaría dar una sorpresa a su novia para las vacaciones",  
				PreferredChannels: [
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Influencers", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Luisa Marquéz Martín",
				Photo: "woman.png",
				Quote: "A quotation that captures the essence of this person's personality",
				Age: 17,
				Occupation: "Searching for a cure for the Empress",
				Family: "No parents, only family are the people who raised him.",
				Location: "The Grassy Plains of Fantasia",
				Character: "Strong, reliable and fearless.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["The goals this user hopes to achieve.", "A task that needs to be completed.", "A life goal to be reached.", "An experience to be felt."],
				Frustrations: ["The frustrations this user would like to avoid.", "The obstacle that prevents the user from achieving their goals.", "The problems with the solutions already available.", "The product or service which does not currently exist."],
				Bio: "The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user's personal and professional life that make this user an ideal customer of your product.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
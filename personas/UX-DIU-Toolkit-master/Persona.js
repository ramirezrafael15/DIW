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
                Contextos: "Le gustaría darle una sorpresa a su novia por su cumpleaños junto con sus amigas y amigos	",  
				PreferredChannels: [
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Influencers", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 }
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
				Age: 47,
				Occupation: "Inversiones en ladrillo en diversos paises",
				Family: "Vive con su marido y sus dos hijas. Pero aún tiene a su madre.",
				Location: "Reside en Estados Unidos",
				Character: "Fuerte, desconficada y antisocial.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Desea escalar sus inversiones realizadas en ladrillo", "Le enncantaría hacer el PER para poder llevar barcos de gran escala", "Quiere seguir viviendo junto su familia felizmente"],
				Frustrations: ["A pesar de que tiene una buena vida gracias a la herencia que le dejó su padre y de su buena administracion de dicho dinero; desde siempre había soñado con ser azafata de vuelo, pero debido a las facilidades que le otorgó el dinero, dejo de lado los estudios", "También le hubiera gustado llegar lejos a nivel deportivo, ella se dedicaba al tenis a nivel profesional peroi debido a una lesión en el hombre, se tuvo que retirar"],
				Bio: "Luisa es una mujer cuyo padre era CEO de una de las multinacionales, dedicadas a la informática, más grandes del mundo. Pero a ella no le llenaba el tema de la informática y al ser hija unica, su padre antes de fallecer decidió vender la empresa por una gran cantidad de dinero. En el testamento repartió dicho dinero entre Luisa y su madre. Y ella, que en ese momento se acababa de casar con su marido, especializado en Arquitectura/Ingeniería Civil; le animó a que entre los dos, ella con su capital y el con sus conocimientos en arquitectura, junto con un máster en dirección de empresas, invirtieran en ladrillo.",
				Tech: [
					{ Name: "Finanzas", Value: 5 },
					{ Name: "Arquitectura", Value: 2 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Diurección de empresas", Value: 4 }
					
				], 
                Contextos:   "Ambos, marido y mujer, llevan un tiempo de mucho trabajo analizando diferentes edificios en los que invertir; además han venido a España para solucionar otros problemas sobre pisos acupados. Por lo tanto se encuentran desgastados y saturados en todos los aspectos y al ver un anuncio sobre paseos en barco decidieron reservar uno de los barcos más grandes y lujosos de la empresa para relajarse y pensar con claridad cada una de las decisiones que denbian tomar para sacar adelante sus negocios.	" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
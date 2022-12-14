export const Rulesets: {[k: string]: ModdedFormatData} = {
	teampreview: {
		inherit: true,
		onBattleStart() {
			// Xerneas isn't in DLC1 but operated this way pre-1.3.2 update
			const formesToLeak = ["xerneas"];
			for (const pokemon of this.getAllPokemon()) {
				if (!formesToLeak.includes(this.toID(pokemon.baseSpecies.name))) continue;
				const newDetails = pokemon.details.replace(', shiny', '');
				this.add('updatepoke', pokemon, newDetails);
			}
		},
	},
};

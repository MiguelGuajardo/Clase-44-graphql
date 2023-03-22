class Hero {
    constructor(){
        this.heroes = []
    }
    getHeroes = ()=>{
        return this.heroes
    }
    createHero = (data)=>{
        if(this.heroes.length === 0){
            data.id = 1
        }else{
            data.id = this.heroes[this.heroes.length-1].id + 1
        }
        this.heroes.push(data)
        return data
    }
    deleteHero = (data)=>{
        this.heroes = this.heroes.filter(item => item.id !== data.id)
        return this.heroes
    }
}

module.exports = Hero
let data={
    sophia:{
        id:33,
        study:[
            {
                primary:
                [
                    {school_name:"ABC primary school"},
                    {location:"Petrs burg"}
                ]
            },
            {
                secondary:
                [
                    {school_name:"ABC secondary school"},
                    {location:"st Lorence"}
                ]
            }
        ]
    }
}
console.log(data.sophia.study[1].secondary[1].location);
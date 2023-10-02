    import React from "react";
    import { useSelector } from 'react-redux';

    const Card = ()=> {
    
        const historyyy = useSelector((state)=>state.history);
        console.log("history",historyyy);
        const data = useSelector((state)=>state.wordDetails)
        const volume = data.data;
        // console.log(data)
        console.log(volume,data)

        //  const histData = useSelector((state) => state.history);
    
        //  localStorage.setItem('histData', JSON.stringify(histData));
        if(volume == null){
            return (
                <div className="cardArea">
                    <h4>{data.error}</h4>

                </div>
            )
        }
        return (
            <div className="cardArea">
            { 
            volume && 
                volume.map((item,index)=>(
                    
                    <div className="card" key={item.word+index}>
                    <h2>{item.word}</h2>
                    <p>{item.phonetic}</p> 

                    {   item.phonetics &&
                        item.phonetics.map((phone,ind)=>(
                            <div>
                            <audio controls>
                        <source src={phone.audio} type="audio/mpeg" />
                    </audio>
                    <p>{phone.text}</p>
                            </div>

                        ))
                    }
                
                    {
                        item.meanings && 
                        item.meanings.map((mean,i)=>{
                            if(mean.partOfSpeech=="noun"){
                            return (
                                <div>
                                    <h3>noun</h3>
                                    {
                                        mean.definitions &&
                                        mean.definitions.map((def,num)=>(
                                                <p>{def.definition}</p>
                                            
                                        ))
                                    }
                                </div>
                            )

                            }
                            else if(mean.partOfSpeech=="verb"){
                                return (
                                    <div>
                                        <h3>verb</h3>
                                        {
                                            mean.definitions &&
                                            mean.definitions.map((def,num)=>(
                                                    <p>{def.definition}</p>
                                                
                                            ))
                                        }
                                    </div>
                                )
                            }
                        })
                    }
                    
            
            </div>
                ))
            }
            
            </div>
        )
    }

    export default Card;
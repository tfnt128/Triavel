import { useState } from "react";
import Esqbox from "../../components/Esquecise/Esqbox";
import Fundoes from "../../components/Esquecise/Fundoes";
import Footer from "../../components/Login/Footer";
import Greenwarn from "../../components/Globals/Mensages/Greenwarn";
import Warn from "../../components/Globals/Mensages/Warn";

function Esquecisenha(){

    const [boxnumber, setBoxnumber] = useState(0);
    const [greenW, setGreenW] = useState(false);
    const [redW, setRedW] = useState(false);
    const [emptyType, setEmptyType] = useState(false);


    return(
        <>
            <Fundoes z="z-[5]"/>
            { boxnumber == 0 &&
                <Esqbox firstTitle="Esqueceu a" 
                    secTitle="senha?" 
                    infoText="Nós enviaremos um código para o seu e-mail cadastrado. Para a redefinição de uma nova senha, insira o código enviado na próxima tela. Em seguida, você será redirecionado para a tela de redefinição de senha." 
                    placeText="Informe o e-mail cadastrado" 
                    butText="Enviar código"
                    transition="animate-fade-right"
                    boxnumber = {boxnumber}
                    setBoxnumber = {setBoxnumber}
                    noInput={false}
                    redW = {redW}
                    setRedW = {setRedW}
                    emptyType = {emptyType}
                    setEmptyType = {setEmptyType}/>
            }
            { boxnumber == 1 &&
                <Esqbox firstTitle="Código" 
                    secTitle="enviado!" 
                    infoText="O código de redefinição acaba de ser enviado para o seu e-mail. Por favor, verifique sua caixa de entrada e informe o código no campo abaixo dentro do tempo." 
                    placeText="Informe o código enviado" 
                    butText="Confirmar código"
                    transition="animate-fade-right"
                    boxnumber={boxnumber}
                    setBoxnumber={setBoxnumber}
                    timer = {true}
                    noInput={false}
                    redW = {redW}
                    setRedW = {setRedW}
                    emptyType = {emptyType}
                    setEmptyType = {setEmptyType}/>
            }
            { boxnumber == 3 &&
                <Esqbox firstTitle="Tempo" 
                    secTitle="esgotado!" 
                    infoText="Parece que você não informou o código a tempo. Clique no botão abaixo para voltar ao início e tentar novamente." 
                    butText="Voltar ao inicio"
                    transition="animate-fade-right"
                    boxnumber={boxnumber}
                    setBoxnumber={setBoxnumber}
                    noInput={true}
                    greenW = {greenW}
                    setGreenW = {setGreenW}
                    redW = {redW}
                    setRedW = {setRedW}
                    emptyType = {emptyType}
                    setEmptyType = {setEmptyType}
                    />
            }
            { boxnumber == 2 &&
                <Esqbox firstTitle="Redefina" 
                    secTitle="sua senha" 
                    infoText="No campo abaixo, insira sua nova senha e, após isso, confirme e clique no botão para redefini-la." 
                    butText="Redefinir senha"
                    transition="animate-fade-right"
                    boxnumber={boxnumber}
                    setBoxnumber={setBoxnumber}
                    extraInput={true}
                    noInput={false}
                    placeText="Crie uma nova senha"
                    extraHolder="Confirme a nova senha"
                    greenW = {greenW}
                    setGreenW = {setGreenW}
                    redW = {redW}
                    setRedW = {setRedW}
                    emptyType = {emptyType}
                    setEmptyType = {setEmptyType}
                    />
            }
            {
                greenW == true &&
                <Greenwarn ClassName="absolute z-[20] ml-[32%] lg:ml-[84%] mt-[160%] lg:mt-[0%]" Msg="Senha redefinida!
                    Aguarde e você será redirecionado para a página de início."/>
            }
            {
                redW == true &&
                <Warn ClassName="absolute z-[20] ml-[32%] mt-[160%] lg:ml-[84%] lg:mt-0" Msg="As senhas não coincidem!"/>
            }
            {
                emptyType == true &&
                <Warn ClassName="absolute z-[20] ml-[32%] mt-[160%] lg:ml-[84%] lg:mt-0 lg:pt-3" Msg="Nenhum campo deve ficar vazio!"/>

            }

        </>
    )
}

export default Esquecisenha;
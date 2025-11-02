import Limit from "../../components/body/Limit";
import ButtonMain from "../../components/body/ButtonMain";
import { TitleProject, SubTitle, Text, Video, VideoRes } from "./styles";

const MainPage = () => {
    return (
        <>
            <Limit>
                <TitleProject>FINANÇA ESPERANÇA</TitleProject>
                <Text>Você já se perguntou para onde vai o seu dinheiro no fim do mês? Ou se realmente entende o que está por trás de um contrato que assinou? E aquelas promessas de “lucro fácil” que aparecem na internet, será que são confiáveis?</Text>
                <Text>O Projeto Finança Esperança é uma iniciativa dos alunos de Economia da Universidade Católica de Brasília que nasceu para responder a essas perguntas de forma prática, acessível e transformadora. Nosso objetivo é levar conhecimento financeiro para a comunidade, ajudando pessoas a conquistarem mais autonomia, segurança e liberdade em suas escolhas.</Text>
                <Text>O projeto é dividido em três módulos, pensados para construir uma jornada de aprendizado passo a passo:</Text>
                <SubTitle>Módulo 1 - Organização Financeira</SubTitle>
                <Text>Aprender a entender e planejar o fluxo do dinheiro, usando métodos simples como o 50/30/20 e criando hábitos saudáveis para o bolso.</Text>
                <SubTitle>Módulo 2 - Armadilhas em Contratos</SubTitle>
                <Text>Identificar cláusulas abusivas, letras miúdas e práticas ilegais que podem comprometer seu planejamento.</Text>
                <SubTitle>Módulo 3 - Armadilhas em Instrumentos Financeiros</SubTitle>
                <Text>Reconhecer fraudes, pirâmides e falsas promessas de lucro fácil, além de entender os riscos reais de diferentes investimentos.</Text>
                <Video>
                    <VideoRes src="https://www.youtube.com/embed/67-BL0h1g5c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </Video>
                <ButtonMain text="COMEÇAR CURSO" to="/module1" />
            </Limit>
        </>
    )
}

export default MainPage;
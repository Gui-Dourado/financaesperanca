import { SubTitle, Text, List, ListItem } from "./styles";

const TermsUse = () => {
    return (
        <>
            <SubTitle>1) Quem somos</SubTitle>
            <Text>O Finança Esperança é um projeto de extensão universitária administrado por alunos do curso de Economia da Universidade Católica de Brasília (UCB), com finalidade exclusivamente acadêmica (ensino, pesquisa e extensão). Contato oficial do projeto/controlador de dados: contato.financa.esperanca@gmail.com .</Text>
            <SubTitle>2) O que é este serviço (e o que não é)</SubTitle>
            <List>
                <ListItem>A plataforma permite cadastrar usuários, coletar e organizar dados para estudos e relatórios acadêmicos.</ListItem>
                <ListItem>Não prestamos aconselhamento financeiro individual, profissional ou regulado. As informações têm caráter educacional e de pesquisa.</ListItem>
                <ListItem>O uso é voluntário e condicionado ao aceite destes Termos.</ListItem>
            </List>
            <SubTitle>3) Quem pode usar</SubTitle>
            <List>
                <ListItem>Pessoas maiores de 10 anos.</ListItem>
                <ListItem>Você deve fornecer informações verdadeiras e manter sua conta segura.</ListItem>
            </List>
            <SubTitle>4) Dados pessoais que coletamos</SubTitle>
            <List>
                <ListItem>Nome e Sobrenome;</ListItem>
                <ListItem>E-mail e Senha(Amazenada com hash);</ListItem>
                <ListItem>Gênero e Idade;</ListItem>
                <ListItem>Ip, País e Cidade.</ListItem>
            </List>
            <SubTitle>5) Para que usamos seus dados (finalidades) e bases legais</SubTitle>
            <List>
                <ListItem>Operação da conta e da plataforma (criar login, autenticar, comunicar avisos do serviço).</ListItem>
                <ListItem>Segurança, prevenção a fraudes e registros de acesso (uso de IP e logs).</ListItem>
                <ListItem>Ensino, pesquisa e produção de relatórios acadêmicos (com anonimização sempre que possível).</ListItem>
            </List>
            <SubTitle>6) Compartilhamento de dados</SubTitle>
            <List>
                <ListItem>Acesso restrito à equipe do projeto, orientadores e, quando aplicável, à administração acadêmica da UCB.</ListItem>
                <ListItem>Resultados e publicações serão apresentados apenas de forma agregada/anonimizada, sem identificar usuários.</ListItem>
                <ListItem>Fornecedores de infraestrutura (por exemplo, serviço de hospedagem/nuvem) podem processar dados enquanto operadores, seguindo nossas instruções e medidas de segurança.</ListItem>
                <ListItem>Não vendemos seus dados.</ListItem>
            </List>
            <SubTitle>7) Armazenamento, local e retenção</SubTitle>
            <List>
                <ListItem>Dados podem ser armazenados em servidores no Brasil ou no exterior. Quando houver transferência internacional, adotaremos salvaguardas adequadas.</ListItem>
                <ListItem>Prazo de retenção: pelo período de vigência do projeto e por até 2 anos após o encerramento, ou conforme exigências acadêmicas/legais. Após esse período, os dados serão eliminados ou anonimizados.</ListItem>
            </List>
            <SubTitle>8) Segurança da informação</SubTitle>
            <Text>Adotamos medidas técnicas e organizacionais, tais como:</Text>
            <List>
                <ListItem>Criptografia/Hash de senhas;</ListItem>
                <ListItem>Controle de acesso restrito;</ListItem>
                <ListItem>Registros de acesso e monitoramento;</ListItem>
                <ListItem>Procedimentos de backup e anonimização para fins de pesquisa sempre que possível. Nenhuma medida é absoluta; em caso de incidente, comunicaremos conforme a LGPD.</ListItem>
            </List>
            <SubTitle>9) Alterações destes Termos</SubTitle>
            <Text>Podemos atualizar estes Termos e o Aviso de Privacidade para refletir melhorias do projeto ou exigências legais. Avisaremos de mudanças relevantes e registraremos a data da última atualização.</Text>
            <SubTitle>10) Disposições finais</SubTitle>
            <List>
                <ListItem>Estes Termos são regidos pela legislação brasileira, inclusive a LGPD (Lei nº 13.709/2018).</ListItem>
                <ListItem>Foro: Brasília/DF, salvo disposição legal de proteção ao consumidor mais favorável.</ListItem>
                <ListItem>Se alguma cláusula for considerada inválida, as demais permanecem válidas.</ListItem>
            </List>
            <SubTitle>11) Aceite</SubTitle>
            <Text>Ao clicar em “Li e concordo com os Termos de Uso e o Aviso de Privacidade” e concluir seu cadastro, você declara que leu, compreendeu e concorda com o tratamento de dados aqui descrito.</Text>
        </>
    );
}

export default TermsUse;
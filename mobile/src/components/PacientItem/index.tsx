import React from "react";
import { View } from "react-native";
import { Card } from "react-native-shadow-cards";
// Interfaces
import { PacientProps } from "../../shared/interfaces";
// Styles
import { NameText, Row, SubText } from "./pacientItem.styles";

const PacientItem = ({
    nome,
    cidade,
    dataCadastro,
    estado,
    idade,
}: PacientProps) => {
    return (
        <Card
            style={{
                marginTop: 40,
                marginRight: 10,
                marginBottom: 5,
                width: 300,
            }}
            elevation={6}
        >
            <View style={{ borderRadius: 12, padding: 8 }}>
                <Row>
                    <View>
                        <NameText>{nome}</NameText>
                        <SubText>idade: {idade}</SubText>
                        <SubText>
                            Data de cadastro:{" "}
                            {new Date(dataCadastro).toLocaleDateString()}
                        </SubText>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <SubText>{estado}</SubText>
                        <SubText>{cidade}</SubText>
                    </View>
                </Row>
            </View>
        </Card>
    );
};

export default PacientItem;

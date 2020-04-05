import 'intl';
// PARA FORMATAÇÃO REAL
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { Text, View } from 'react-native';

// Importando Rotas.
import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

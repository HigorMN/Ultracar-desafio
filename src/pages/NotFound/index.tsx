import { Button, Result } from 'antd';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Desculpe, a página que você visitou não existe."
      extra={
        <Button type="primary" href="/dashboard">
          Voltar para a página inicial
        </Button>
      }
    />
  );
}

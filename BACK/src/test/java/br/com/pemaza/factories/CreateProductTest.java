package br.com.pemaza.factories;

import br.com.pemaza.domain.Product;

/**
 * @author João Paulo on 06/10/2017.
 */
public class CreateProductTest {
    public static Product get(Long id, String codigo, String nome, Double valorCompra){
        return new Product(){{
            setId(id);
            setCodigo(codigo);
            setNome(nome);
            setValorCompra(valorCompra);
            setValorVenda(valorCompra);
        }};
    }
}

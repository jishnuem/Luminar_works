class BookLibrary{

    getBooks(){
        let books={
                "the alchemist":{book_name:"alchemist",author:"paulo",price:200,no_copies:5,sold:1},
                "the":{book_name:"the",author:"pa",price:210,no_copies:7, nocopiessold:1},
                "abc":{book_name:"abc",author:"aa",price:205,no_copies:4},
                "xzy":{book_name:"xzy",author:"zz",price:290,no_copies:9},
                "asd":{book_name:"asd",author:"qw",price:280,no_copies:3},

        }
        return books
    }
    findBook(bookname){
        let book=this.getBooks();
        if(bookname in book){
            return 1;
        }
        else{
            return 0
        }
    }
}
var bk= new BookLibrary()
var bk_name=bk.findBook('thea')
var res=bk_name==0?"not":"avai"
console.log(res);



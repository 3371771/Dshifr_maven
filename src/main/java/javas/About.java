package javas;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

class About {

    static void display(){
        Stage windowAbout = new Stage();
        //добавим иконку в название окна
        windowAbout.setTitle("О программе");

        windowAbout.getIcons().add(new Image("info_.jpg"));
        windowAbout.setHeight(190);
        windowAbout.setWidth(380);

        ImageView infoImg = new ImageView("info_.jpg");

        Label labelProgName = new Label("D' ШИФР");
        labelProgName.setId("labelProgName");

        Label labelMyName = new Label("Автор: Ксения И.");
        Label labelVersion = new Label("Версия: 1.0.1");

        VBox vLayoutAbout = new VBox(15);
        vLayoutAbout.setPadding(new Insets(13));
        vLayoutAbout.getChildren().addAll(labelProgName, labelMyName, labelVersion);
        vLayoutAbout.setAlignment(Pos.CENTER);

        HBox hLayoutAbout = new HBox(15);
        hLayoutAbout.setPadding(new Insets(13));
        hLayoutAbout.getChildren().addAll(infoImg, vLayoutAbout);
        hLayoutAbout.setAlignment(Pos.CENTER);

        Scene sceneAbout = new Scene(hLayoutAbout);
        sceneAbout.getStylesheets().add("style.css");

        windowAbout.setScene(sceneAbout);
        windowAbout.show();
    }
}

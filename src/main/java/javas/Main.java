package javas;

import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.geometry.Side;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.MenuButton;
import javafx.scene.control.MenuItem;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.*;
import javafx.stage.Stage;
import javazoom.jl.decoder.JavaLayerException;

import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;
import java.io.IOException;

public class Main extends Application{

    public Main() throws IOException, JavaLayerException, UnsupportedAudioFileException, LineUnavailableException {
    }

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {

        primaryStage.setTitle("D' Шифр");
        primaryStage.getIcons().add(new Image("icon_mini.jpg"));

        primaryStage.setOnCloseRequest(e -> Player.stopMusic());

        //создание и наполнение меню
        MenuButton menuHelp = new MenuButton("Помощь");
        menuHelp.setPrefWidth(86);
        menuHelp.setPopupSide(Side.RIGHT);
        //пункт О программе и открытие при нажатии
        MenuItem helpItem = new MenuItem("О программе");
        // задаем Id для управления стилем
        helpItem.setId("labelMenu");
        helpItem.setOnAction(e-> About.display());

        MenuItem manualItem = new MenuItem("Мануал");
        manualItem.setId("labelMenu");

        manualItem.setOnAction(e -> Manual.display());
        menuHelp.getItems().addAll(helpItem, manualItem);

        //задаем ориентацию меню и добавляем в бокс элементы
        VBox menuBox = new VBox();
        menuBox.getChildren().addAll(menuHelp);

        ImageView imageView = new ImageView("icon_.jpg");

        Label labelMain = new Label("Выберите алгоритм шифрования:");

        Label labelProgName = new Label("D' ШИФР");
        labelProgName.setId("labelProgName");

        Button buttonRsa = new Button("RSA");
        buttonRsa.setId("buttonAlg");
        buttonRsa.setOnAction(e -> AlertWindow.display("RSA"));

        Button buttonDes = new Button("DES");
        buttonDes.setId("buttonAlg");
        buttonDes.setOnAction(e -> AlertWindow.display("DES"));

        Button buttonAes = new Button("AES");
        buttonAes.setId("buttonAlg");
        buttonAes.setOnAction(e -> AlertWindow.display("AES"));

        Button buttonStopMario = new Button("Я не люблю Марио!");
        buttonStopMario.setOnAction(e -> stop());

        HBox buttonBox = new HBox(40);
        buttonBox.setPadding(new Insets(10, 0, 0, 0));
        buttonBox.setAlignment(Pos.CENTER);
        buttonBox.getChildren().addAll(buttonAes, buttonDes, buttonRsa);

        VBox leftBox = new VBox(2);
        leftBox.setPadding(new Insets(0, 15, 0, 0));
        leftBox.getChildren().addAll(imageView, labelProgName );
        leftBox.setAlignment(Pos.TOP_CENTER);

        VBox centerBox = new VBox(15);
        centerBox.setAlignment(Pos.TOP_CENTER);
        centerBox.getChildren().addAll(labelMain,  buttonBox);

        HBox bottomBox = new HBox(200);
        bottomBox.setAlignment(Pos.BOTTOM_LEFT);
        bottomBox.getChildren().addAll(menuBox, buttonStopMario);

        //разметка главного окна
        BorderPane layoutMain = new BorderPane();
        layoutMain.setPadding(new Insets(20,20,5,20));
        //определение места отображения Боксов
        layoutMain.setLeft(leftBox);
        layoutMain.setCenter(centerBox);
        layoutMain.setBottom(bottomBox);

        //добавить новый имг с облаками

        //применяем разметку к первому окну
        Scene sceneMain = new Scene(layoutMain, 500, 180);

        //задания первого окна при открытии приложения
        primaryStage.setScene(sceneMain);
        //задаем стиль
        sceneMain.getStylesheets().add("style.css");

        primaryStage.show();

        // фон
        BackgroundImage myBI = new BackgroundImage(new Image("fon1.jpg", 450, 180, true, false),
                BackgroundRepeat.REPEAT, BackgroundRepeat.REPEAT, BackgroundPosition.DEFAULT, BackgroundSize.DEFAULT);
        layoutMain.setBackground(new Background(myBI));
        play();
    }

    private void play() {
        Player.playMusic();
    }

    public void stop() {
        Player.stopMusic();
    }
}

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from 'lexical';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { mergeRegister } from '@lexical/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { currentUrl } from '../../Assets/urls';
import {$generateHtmlFromNodes} from '@lexical/html';

function onChange(state) {
  state.read(() => {
    const root = $getRoot();
    const selection = $getSelection();

  });
}

export const Editor = () => {
  const initialConfig = {};

  return (
    <div className="bg-white relative rounded-sm shadow-sm border border-gray-200">
      <LexicalComposer
        initialConfig={{
          theme: {
            // ltr: 'ltr',
            // rtl: 'rtl',
            paragraph: 'mb-1',
            rtl: 'text-right',
            ltr: 'text-left',
            text: {
              bold: 'font-bold',
              italic: 'italic',
              underline: 'underline',
              strikethrough: 'line-through',
            },
          },
          onError(error) {
            throw error;
          },
        }}
      >
        <Toolbar />
        <RichTextPlugin
          contentEditable={
            <ContentEditable 
                className="min-h-[450px] py-[15px] px-2.5 resize-none overflow-hidden text-ellipsis"
                />
          }
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
      </LexicalComposer>
    </div>
  );
};

const Toolbar = () => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isStrikethrough, setIsStrikethrough] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);

  let html = {biography: ""}


  const [apiResponse, setApiResponse] = useState()

  const handleSave = async () => {
    try {
      // Send a POST request with the editorState data
      const response = await axios.put(`${currentUrl}/api/users/1`, 
        html,
      );
        setApiResponse(response)

    } catch (error) {   
        console.error(error);
    }
  };

  useEffect(()=> {
    editor.update(() => {
        const htmlString = $generateHtmlFromNodes(editor, null);
        html.biography = htmlString
    });
  },[editor, handleSave])

  const editorString = {biography : JSON.stringify(editor._editorState)}

  const updateToolbar = React.useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsUnderline(selection.hasFormat('underline'));
    }
  }, [editor]);

  React.useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      })
    );
  }, [updateToolbar, editor]);

  return (
    <div className="fixed z-20 shadow bottom-8 left-1/2 transform -translate-x-1/2 min-w-52 h-10 px-2 py-2 bg-[#1b2733] mb-4 space-x-2 flex items-center">
      <button
        className={clsx(
          'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
          isBold ? 'bg-gray-700' : 'bg-transparent'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-bold"
          className="text-white w-3.5 h-3.5"
        />
      </button>
      <button
        className={clsx(
          'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
          isStrikethrough ? 'bg-gray-700' : 'bg-transparent'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-strikethrough"
          className="text-white w-3.5 h-3.5"
        />
      </button>
      <button
        className={clsx(
          'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
          isItalic ? 'bg-gray-700' : 'bg-transparent'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-italic"
          className="text-white w-3.5 h-3.5"
        />
      </button>
      <button
        className={clsx(
          'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in',
          isUnderline ? 'bg-gray-700' : 'bg-transparent'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-underline"
          className="text-white w-3.5 h-3.5"
        />
      </button>

      <span className="w-[1px] bg-gray-600 block h-full"></span>

      <button
        className={clsx(
          'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-align-left"
          className="text-white w-3.5 h-3.5"
        />
      </button>
      <button
        className={clsx(
          'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-align-center"
          className="text-white w-3.5 h-3.5"
        />
      </button>
      <button
        className={clsx(
          'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-align-right"
          className="text-white w-3.5 h-3.5"
        />
      </button>
      <button
        className={clsx(
          'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
        )}
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-align-justify"
          className="text-white w-3.5 h-3.5"
        />
      </button>

      <span className="w-[1px] bg-gray-600 block h-full"></span>

      <button
        className={clsx(
          'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
        )}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND);
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-rotate-left"
          className="text-white w-3.5 h-3.5"
        />
      </button>
      <button
        className={clsx(
          'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in'
        )}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND);
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-rotate-right"
          className="text-white w-3.5 h-3.5"
        />
      </button>
      <button
        className="px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in text-white"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

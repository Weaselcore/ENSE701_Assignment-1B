import React from 'react'
import '@testing-library/jest-dom'
import TestTypeDropDown from '../src/components/TestTypeDropdown'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import SubmitForm from '../src/pages/Articles'
import regeneratorRuntime from "regenerator-runtime";

class FileReaderMock {
  DONE = FileReader.DONE;
  EMPTY = FileReader.EMPTY;
  LOADING = FileReader.LOADING;
  readyState = 0;
  abort = jest.fn();
  addEventListener = jest.fn();
  dispatchEvent = jest.fn();
  onabort = jest.fn();
  onerror = jest.fn();
  onload = jest.fn();
  onloadend = jest.fn();
  onloadprogress = jest.fn();
  onloadstart = jest.fn();
  onprogress = jest.fn();
  readAsArrayBuffer = jest.fn();
  readAsBinaryString = jest.fn();
  readAsDataURL = jest.fn();
  readAsText = jest.fn();
  removeEventListener = jest.fn();
}

async function readFileAsDataURL(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', (evt) => {
      if (reader.result) {
        resolve(reader.result);
      }
    });
    reader.readAsDataURL(file);
  });
}

describe('readFileAsDataURL()', () => {
  const file = new File([new ArrayBuffer(1)], '/bib_test_data/ScienceDirect_citations_1654492156067.bib');
  const fileReader = new FileReaderMock();
  jest.spyOn(window, 'FileReader').mockImplementation(() => fileReader);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should resolve file as data URL', async () => {
    fileReader.result = 'file content';
    fileReader.addEventListener.mockImplementation((_, fn) => fn());

    const content = await readFileAsDataURL(file);

    expect(content).toBe('file content');
    expect(fileReader.readAsDataURL).toHaveBeenCalledTimes(1);
    expect(fileReader.readAsDataURL).toHaveBeenCalledWith(file);
  });
});